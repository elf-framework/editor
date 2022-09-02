import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

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

export class Checkbox extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      value,
      content,
      name,
      checked = false,
      onChange,
      indeterminate = false,
      variant = "default",
      size = "medium",
    } = this.props;

    const styleObject = {
      class: classnames([
        "elf--checkbox",
        {
          disabled,
          [variant]: true,
          [size]: true,
        },
      ]),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div {...styleObject}>
        <label>
          <input
            ref="$input"
            type="checkbox"
            {...{
              indeterminate,
              value,
              name,
              disabled: disabled ? "disabled" : undefined,
              checked: checked ? "checked" : undefined,
            }}
            onChange={(e) => onChange?.(e, value)}
          />
          {content}
        </label>
      </div>
    );
  }

  get checked() {
    return this.refs.$input.checked;
  }

  get value() {
    return this.props.value;
  }
}
