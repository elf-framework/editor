import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

import { Radio } from ".";

const cssProperties = {
  borderColor: "--elf--radio-border-color",
  backgroundColor: "--elf--radio-background",
  disabledColor: "--elf--radio-disabled-color",
  color: "--elf--radio-color",
  fontSize: "--elf--radio-font-size",
  fontWeight: "--elf--radio-font-weight",
  height: "--elf--radio-height",
  padding: "--elf--radio-padding",
  borderRadius: "--elf--radio-border-radius",
};

export class RadioGroup extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      name,
      value,
      options = [],
      onChange,
      direction = "horizontal",
      size = "medium",
      variant = "default",
    } = this.props;

    const styleObject = {
      class: classnames("elf--radio-group", {
        [direction]: true,
      }),
      disabled: disabled ? "disabled" : undefined,
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    const radioName = name || "name-" + this.id;

    return (
      <div {...styleObject}>
        {options.map((it, index) => {
          const checked = it.value === value;
          return (
            <Radio
              ref={`$${index}`}
              name={radioName}
              value={it.value}
              onChange={(e, v) => {
                this.setState({ value: v }, false);
                onChange(e, v);
              }}
              checked={checked}
              disabled={disabled}
              size={size}
              variant={variant}
            >
              {it.label}
            </Radio>
          );
        })}
      </div>
    );
  }

  get value() {
    return this.state.value || this.props.value;
  }

  set value(value) {
    this.setState({ value });
  }
}
