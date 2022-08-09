import { classnames, UIElement } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { convertPropertyToStyleKey } from "../../utils/styleKeys";

const cssProperties = {
  borderColor: "--elf--button-border-color",
  backgroundColor: "--elf--button-background-color",
  disabledColor: "--elf--button-disabled-color",
  color: "--elf--button-color",
  fontSize: "--elf--button-font-size",
  fontWeight: "--elf--button-font-weight",
  height: "--elf--button-height",
  padding: "--elf--button-padding",
  borderRadius: "--elf--button-border-radius",
};

export class ToggleButton extends UIElement {
  template() {
    const {
      type,
      size,
      disabled,
      shape,
      destructive = false,
      style = {},
      onClick,
      content,
      ...extraStyle
    } = this.props;

    const { style: styleProperties } = convertPropertyToStyleKey(extraStyle);

    const styleObject = {
      class: classnames([
        "elf--button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline",
        },
        destructive ? "destructive" : "",
        {
          "large": size === "large",
          "small": size === "small",
        },
        {
          "elf--button-shape-circle": shape === "circle",
          "elf--button-shape-round": shape === "round",
        },
      ]),
      disabled: disabled ? "disabled" : undefined,
      style: propertyMap(
        {
          ...style,
          ...styleProperties,
        },
        cssProperties
      ),
    };

    return (
      <button {...styleObject} onClick={onClick}>
        <span>{content || ""}</span>
      </button>
    );
  }
}
