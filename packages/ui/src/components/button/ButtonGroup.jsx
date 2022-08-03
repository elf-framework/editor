import { classnames, UIElement } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { convertPropertyToStyleKey, makeStyleMap } from "../../utils/styleKeys";

const cssProperties = makeStyleMap("--elf--button-group", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
});

export class ButtonGroup extends UIElement {
  template() {
    const { disabled, style = {}, content, ...extraStyle } = this.props;

    const { style: styleProperties } = convertPropertyToStyleKey(extraStyle);

    const styleObject = {
      class: classnames(["elf--button-group"]),
      disabled: disabled ? "disabled" : undefined,
      style: propertyMap(
        {
          ...style,
          ...styleProperties,
        },
        cssProperties
      ),
    };

    return <div {...styleObject}>{content}</div>;
  }
}
