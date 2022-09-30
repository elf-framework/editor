import { UIElement } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--link-button", {
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  padding: true,
});

export class LinkButton extends UIElement {
  template() {
    const { disabled, style = {}, content, onClick, href } = this.props;

    const styleObject = {
      class: "elf--link-button",
      disabled: disabled ? "disabled" : undefined,
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <a {...styleObject} onClick={onClick} href={href || "#"}>
        <span>{content || ""}</span>
      </a>
    );
  }
}

registerComponent("link-button", LinkButton);
registerComponent("linkbutton", LinkButton);
registerComponent("LinkButton", LinkButton);
