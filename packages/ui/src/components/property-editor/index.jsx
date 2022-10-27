import {
  UIElement,
  classnames,
  useMemo,
  isFunction,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import {
  ButtonItem,
  ColorItem,
  GridItem,
  TextInputItem,
  TitleItem,
} from "./editor-items";

const cssProperties = makeCssVariablePrefixMap("--elf-property-editor", {
  backgroundColor: true,
  color: true,
  height: true,
  width: true,
  hoverColor: true,
  borderColor: true,
});

const predefinedPlugins = {
  title: TitleItem,
  text: TextInputItem,
  grid: GridItem,
  button: ButtonItem,
  color: ColorItem,
};

export class PropertyEditor extends UIElement {
  makeEditorItem(item, index) {
    const { plugins = {} } = this.props;
    const { key, value = this.state.value[key], label, type } = item;

    const InnerEditor = plugins[type] || predefinedPlugins[type];

    if (InnerEditor) {
      return (
        <InnerEditor
          key={key}
          index={index}
          label={label}
          value={value}
          onChange={(newValue) => {
            if (item.onChange) {
              item.onChange(newValue, item, this);
            }

            if (isFunction(this.props.onChange)) {
              this.props.onChange(key, newValue, this);
            }

            this.state.value[key] = newValue;
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
    let returnInspector = [];
    if (isFunction(inspector)) {
      returnInspector = inspector(value);
    } else if (Array.isArray(inspector)) {
      returnInspector = inspector;
    }

    if (!inspector || Array.isArray(inspector) === false) {
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

  template() {
    const { style = {} } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf-property-editor");
    });

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    this.state.inspector = this.makeInspector(
      this.props.inspector,
      this.props.value
    );

    return (
      <div {...styleObject}>
        {this.state.inspector.map((item, index) => {
          return (
            <div class="elf-property-editor-item">
              {item.label ? <div class="label">{item.label}</div> : undefined}
              <div class="editor">{this.makeEditorItem(item, index)}</div>
            </div>
          );
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
