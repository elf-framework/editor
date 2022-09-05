import { UIElement, classnames } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import {
  makeCssVariablePrefixMap,
  splitStyleKeyAndNoneStyleKey,
} from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--button", {
  borderColor: true,
  backgroundColor: true,
  selectedBackgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
});

export class Button extends UIElement {
  template() {
    const {
      variant = "default",
      size,
      disabled,
      selected,
      shape,
      quiet = false,
      outline = false,
      style = {},
      onClick,
      content,
      ...extraStyle
    } = this.props;

    const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);

    const styleObject = {
      class: classnames([
        "elf--button",
        {
          selected,
          outline,
          quiet,
          [variant]: true,
          [size]: true,
          [shape]: true,
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

registerComponent("button", Button);
registerComponent("btn", Button);
registerComponent("Button", Button);
