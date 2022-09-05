import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

const cssProperties = {
  borderColor: "--elf--icon-button-border-color",
  backgroundColor: "--elf--icon-button-background",
  disabledColor: "--elf--icon-button-disabled-color",
  color: "--elf--icon-button-color",
  fontSize: "--elf--icon-button-font-size",
  fontWeight: "--elf--icon-button-font-weight",
  height: "--elf--icon-button-height",
  padding: "--elf--icon-button-padding",
  borderRadius: "--elf--icon-button-border-radius",
};

// @depreacted
export class IconButton extends UIElement {
  template() {
    console.warn("deprecated: use Button instead");
    const {
      type,
      icon,
      content = "",
      size,
      disabled,
      shape,
      style = {},
    } = this.props;

    const styleObject = {
      class: classnames([
        "elf--icon-button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline",
        },
        {
          "elf--icon-button-lg": size === "large",
          "elf--icon-button-sm": size === "small",
        },
        {
          "elf--icon-button-shape-circle": shape === "circle",
          "elf--icon-button-shape-round": shape === "round",
        },
      ]),
      disabled: disabled ? "disabled" : undefined,
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <button type="button" {...styleObject} onClick={this.props.onClick}>
        {icon || content || ""}
      </button>
    );
  }
}
