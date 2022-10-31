import {
  UIElement,
  isFunction,
  useMemo,
  classnames,
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
  makeEditorItem(item, index) {
    const { plugins = {}, sync } = this.props;

    const { key, value, label, type } = item;
    let oldValue = getValueByPath(this.state.value, key);

    if (typeof value !== "undefined") {
      if (isFunction(value)) {
        oldValue = value(this.state.value);
      } else {
        oldValue = value;
      }
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
          label={label}
          value={oldValue}
          item={item}
          root={this}
          onChange={(newValue) => {
            if (item.onChange) {
              item.onChange(newValue, item, this);
            }

            if (isFunction(this.props.onChange)) {
              this.props.onChange(key, newValue, this);
            }

            setValueByPath(this.state.value, key, newValue);

            // sync 가 true 이면 전체 데이타를 다시 업데이트 한다.
            if (sync) {
              this.refresh();
            }
          }}
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

  makeInspectorItem(item, index) {
    item = makeDividerStyle(item);

    if (typeof item === "string" || typeof item === "number") {
      item = {
        type: "label",
        label: item,
      };
    }

    if (item.type === "label") {
      return <div class="elf--property-editor-item label">{item.label}</div>;
    }

    return (
      <div
        class={classnames("elf--property-editor-item", {
          [item.direction]: true,
        })}
      >
        {item.label ? <div class="label">{item.label}</div> : undefined}
        <div class="editor">{this.makeEditorItem(item, index)}</div>
      </div>
    );
  }

  template() {
    const { style = {}, value, direction = "horizontal" } = this.props;
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

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    this.state.inspector = this.makeInspector(
      this.props.inspector,
      this.state.value
    );

    return (
      <div {...styleObject}>
        {this.state.inspector.map((item, index) => {
          return this.makeInspectorItem(item, index);
        })}
      </div>
    );
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
