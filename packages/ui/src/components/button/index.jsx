import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

export class Button extends UIElement {
  template() {
    const { type, size, disabled, shape, destructive = false, style = {} } = this.props;

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
          "elf--button-lg": size === "large",
          "elf--button-sm": size === "small",
        },
        {
          "elf--button-shape-circle": shape === "circle",
          "elf--button-shape-round": shape === "round",
        },
      ]),
      disabled: disabled ? "disabled" : undefined,
      style: {
        ...propertyMap(style, {
          borderColor: "--elf--button-border-color",
          backgroundColor: "--elf--button-background",
          disabledColor: "--elf--button-disabled-color",
          color: "--elf--button-color",
          fontSize: "--elf--button-font-size",
          fontWeight: "--elf--button-font-weight",
          height: "--elf--button-height",
          padding: "--elf--button-padding",
          borderRadius: "--elf--button-border-radius",
        }),
      },
    };

    return (
      <button {...styleObject} onClick={this.props.onClick}>
        <span>{this.props.content || ""}</span>
      </button>
    );
  }
}