import { UIElement, classnames } from "@elf/sapa";

import { propertyMap } from "../../utils/propertyMap";

export class LinkButton extends UIElement {
  template() {
    const { disabled, style = {}, content, onClick, href } = this.props;

    const styleObject = {
      class: classnames([
        "elf--link-button",
      ]),
      disabled: disabled ? "disabled" : undefined,
      style: {
        ...propertyMap(style, {
          borderColor: "--elf--link-button-border-color",
          backgroundColor: "--elf--link-button-background",
          disabledColor: "--elf--link-button-disabled-color",
          color: "--elf--link-button-color",
          fontSize: "--elf--link-button-font-size",
          fontWeight: "--elf--link-button-font-weight",
          padding: "--elf--link-button-padding",
        }),
      },
    };

    return (
      <a {...styleObject} onClick={onClick} href={href || "#"}>
        <span>{content || ""}</span>
      </a>
    );
  }
}
