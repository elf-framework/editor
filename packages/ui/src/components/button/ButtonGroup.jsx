import { classnames, UIElement } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import {
  splitStyleKeyAndNoneStyleKey,
  makeCssVariablePrefixMap,
} from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--button-group", {
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

    const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);

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

registerComponent("button-group", ButtonGroup);
registerComponent("btn-group", ButtonGroup);
registerComponent("ButtonGroup", ButtonGroup);
