import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

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

export class Radio extends UIElement {
  template() {
    const {
      disabled,
      style = {},
      value,
      content,
      name,
      checked = false,
      onChange,
      size = "medium",
      variant = "default",
    } = this.props;

    const styleObject = {
      class: classnames([
        "elf--radio",
        {
          disabled,
          [size]: true,
          [variant]: true,
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
            type="radio"
            {...{
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
}
