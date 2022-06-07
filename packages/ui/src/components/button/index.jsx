import { BIND, CLICK, UIElement } from "@elf/sapa";

import { propertyMap } from "../../utils/propertyMap";

export class Button extends UIElement {
  template() {
    return <button class="elf--button">{this.props.content || ""}</button>;
  }

  [BIND("$el")]() {
    const { type, disabled, style = {} } = this.props;

    return {
      class: [
        "elf--button",
        {
          primary: type === "primary",
          secondary: type === "secondary",
          outline: type === "outline",
        },
      ],
      disabled: disabled ? "disabled" : null,
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
  }

  [CLICK("$el")](e) {
    const { onClick } = this.props;

    if (onClick) {
      onClick(e);
    }
  }
}
