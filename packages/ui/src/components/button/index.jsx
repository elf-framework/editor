import { CLICK, UIElement, classnames } from "@elf/sapa";

import { propertyMap } from "../../utils/propertyMap";

export class Button extends UIElement {
  template() {
    const { type, disabled, style = {} } = this.props;

    const styleObject = {
      class: classnames([
        "elf--button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline",
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

    return <button {...styleObject}>{this.props.content || ""}</button>;
  }

  [CLICK("$el")](e) {
    const { onClick } = this.props;

    if (onClick) {
      onClick(e);
    }
  }
}
