import {
  UIElement,
  isFunction,
  useMemo,
  classnames,
  useCallback,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Tab, TabItem } from "../tab";
import {
  BooleanItem,
  ButtonItem,
  ColorItem,
  DividerItem,
  GridItem,
  LabelItem,
  NumberInputItem,
  SelectItem,
  SliderItem,
  SwitchItem,
  TabContainerItem,
  TextInputItem,
  TitleItem,
} from "./editor-items";

const cssProperties = makeCssVariablePrefixMap("--elf--property-editor", {
  backgroundColor: true,
  color: true,
  height: true,
  width: true,
  hoverColor: true,
  borderColor: true,
  gap: true,
  itemLabelWidth: true,
});

const predefinedPlugins = {
  title: TitleItem,
  text: TextInputItem,
  number: NumberInputItem,
  grid: GridItem,
  button: ButtonItem,
  color: ColorItem,
  select: SelectItem,
  boolean: BooleanItem,
  switch: SwitchItem,
  tab: TabContainerItem,
  slider: SliderItem,
  divider: DividerItem,
  label: LabelItem,
};

function getValueByPath(obj, path) {
  if (!path) {
    return obj;
  }

  const pathArray = path.split(".");

  return pathArray.reduce((acc, key) => {
    return acc[key];
  }, obj);
}

function setValueByPath(obj, path, value) {
  if (!path) {
    return obj;
  }

  const pathArray = path.split(".");

  const lastKey = pathArray.pop();

  const target = pathArray.reduce((acc, key) => {
    return acc[key];
  }, obj);

  target[lastKey] = value;
}

function setValueByObject(obj, key, value, valueFunc) {
  const newValue = valueFunc(value, obj);

  Object.assign(obj, newValue);
}

function makeDividerStyle(item) {
  if (item === "-") {
    item = {
      type: "divider",
    };
  } else if (item === "--") {
    item = {
      type: "divider",
      style: {
        borderStyle: "dashed",
      },
    };
  } else if (item === "*") {
    item = {
      type: "divider",
      style: {
        borderStyle: "dotted",
      },
    };
  } else if (item === "=") {
    item = {
      type: "divider",
      style: {
        borderStyle: "double",
        height: 3,
      },
    };
  } else if (item === "==") {
    item = {
      type: "divider",
      style: {
        borderStyle: "double",
        height: 5,
      },
    };
  } else if (item === "===") {
    item = {
      type: "divider",
      style: {
        borderStyle: "double",
        height: 7,
      },
    };
  }

  return item;
}

export class PropertyEditor extends UIElement {
  makeEditorItem(item, index, onChange) {
    const { plugins = {} } = this.props;

    item = makeDividerStyle(item);

    if (typeof item === "string" || typeof item === "number") {
      item = {
        type: "label",
        label: item,
      };
    }

    const { key, value, label, type } = item;
    let oldValue = getValueByPath(this.state.value, key);
    let oldLabel = label;

    if (typeof value !== "undefined") {
      if (isFunction(value)) {
        oldValue = value(this.state.value);
      } else {
        oldValue = value;
      }
    }

    if (typeof label === "function") {
      oldLabel = label(this.state.value);
    }

    if (type === "tab") {
      const { style, stripType, activeKey, fitted, compact } = item;
      return (
        <Tab
          style={style}
          compact={compact}
          activeKey={activeKey}
          fitted={fitted}
          stripType={stripType}
        >
          {item.items.map((it) => {
            return (
              <TabItem key={it.key} title={it.label}>
                {it.items.map((it, index) => {
                  return this.makeInspectorItem(it, index);
                })}
              </TabItem>
            );
          })}
        </Tab>
      );
    }

    // editor
    const InnerEditor = plugins[type] || predefinedPlugins[type];

    if (InnerEditor) {
      return (
        <InnerEditor
          key={key}
          index={index}
          label={oldLabel}
          value={oldValue}
          item={item}
          root={this}
          onChange={onChange}
        />
      );
    }
    return undefined;
  }

  makeType(value) {
    if (typeof value === "string") {
      return "text";
    }

    return "text";
  }

  makeInspector(inspector, value) {
    let returnInspector = inspector;
    if (isFunction(inspector)) {
      returnInspector = inspector(value);
    } else if (Array.isArray(inspector)) {
      returnInspector = inspector;
    }

    if (!returnInspector || Array.isArray(returnInspector) === false) {
      returnInspector = Object.entries(value).map(([key, value]) => {
        return {
          key,
          value,
          label: key,
          type: this.makeType(value),
        };
      });
    }

    return returnInspector;
  }

  initState() {
    return {
      oldValue: this.props.value,
      value: this.props.value || {},
    };
  }

  reloadInspector() {
    this.setState(
      {
        value: this.props.value || {},
      },
      false
    );
  }

  makeInspectorItem(item, index, onChange) {
    item = makeDividerStyle(item);

    if (typeof item === "string" || typeof item === "number") {
      item = {
        type: "label",
        label: item,
      };
    }

    let { label } = item;

    if (typeof label === "function") {
      label = label(this.state.value);
    }

    if (item.type === "label") {
      return <div class="elf--property-editor-item label">{label}</div>;
    }

    return (
      <div
        class={classnames("elf--property-editor-item", {
          [item.direction]: true,
        })}
      >
        {label ? <div class="label">{label}</div> : undefined}
        <div class="editor">{this.makeEditorItem(item, index, onChange)}</div>
      </div>
    );
  }

  template() {
    const { style = {}, value, sync, direction = "horizontal" } = this.props;
    const { oldValue } = this.state;

    if (oldValue != value) {
      // 특정 상태에서 상태가 변경되면 리로드를 해야함.
      // FIXME: 이런 상황이 발생하는 이유를 찾아야함.
      this.setState(
        {
          oldValue: value,
          value: value || {},
        },
        false
      );
    }

    const localClass = useMemo(() => {
      return classnames("elf--property-editor", {
        [direction]: true,
      });
    }, [direction]);

    const onChange = useCallback(
      (newValue, item) => {
        const { valueType = "valueByPath", valueFunc, key } = item;
        if (item.onChange) {
          item.onChange(newValue, item, this);
        }

        if (isFunction(this.props.onChange)) {
          this.props.onChange(key, newValue, this);
        }

        if (valueType === "valueByPath") {
          setValueByPath(this.state.value, key, newValue);
        } else if (valueType === "valueByObject") {
          setValueByObject(this.state.value, key, newValue, valueFunc);
        }

        // sync 가 true 이면 전체 데이타를 다시 업데이트 한다.
        if (sync) {
          this.setState({
            value: {
              ...this.state.value,
            },
          });
        }
      },
      [sync, this.props]
    );

    const inspectorList = useMemo(() => {
      return this.makeInspector(this.props.inspector, this.state.value).map(
        (item, index) => {
          return this.makeInspectorItem(item, index, onChange);
        }
      );
    }, [this.props.inspector, onChange, this.state.value]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return <div {...styleObject}>{inspectorList}</div>;
  }

  getValue() {
    return this.state.value;
  }

  setValue(v) {
    this.setState({ value: v });
  }

  get value() {
    return this.getValue();
  }

  set value(v) {
    this.setValue(v);
  }
}
