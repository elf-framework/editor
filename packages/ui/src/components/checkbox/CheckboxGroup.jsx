import { UIElement, classnames } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";

import { Checkbox } from ".";

const cssProperties = {
  borderColor: "--elf--checkbox-border-color",
  backgroundColor: "--elf--checkbox-background",
  disabledColor: "--elf--checkbox-disabled-color",
  color: "--elf--checkbox-color",
  fontSize: "--elf--checkbox-font-size",
  fontWeight: "--elf--checkbox-font-weight",
  height: "--elf--checkbox-height",
  padding: "--elf--checkbox-padding",
  borderRadius: "--elf--checkbox-border-radius",
};

export class CheckboxGroup extends UIElement {
  initState() {
    return {
      value: this.props.value || [],
    };
  }

  template() {
    const {
      disabled,
      style = {},
      value = [],
      options = [],
      onChange,
      direction = "horizontal",
      size = "medium",
      variant = "default",
    } = this.props;

    const styleObject = {
      class: classnames([
        "elf--checkbox-group",
        {
          [direction]: true,
        },
      ]),
      disabled: disabled ? "disabled" : undefined,

      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div {...styleObject}>
        {options.map((it, index) => {
          return (
            <Checkbox
              ref={`checkbox-${index}`}
              value={it.value}
              onChange={(e) => {
                onChange(e, this.getValues());
              }}
              checked={value?.includes(it.value)}
              disabled={disabled}
              indeterminate={it.indeterminate}
              size={size}
              variant={variant}
            >
              {it.label}
            </Checkbox>
          );
        })}
      </div>
    );
  }

  getValues() {
    const values = [];
    Object.keys(this.children).forEach((key) => {
      const child = this.children[key];
      if (child.checked) {
        values.push(child.value);
      }
    });

    return values;
  }

  get disabled() {
    return this.props.disabled;
  }

  get value() {
    return this.getValues();
  }

  set value(values = []) {
    this.setState({ values });
  }
}

registerComponent("checkbox-group", CheckboxGroup);
registerComponent("CheckboxGroup", CheckboxGroup);
