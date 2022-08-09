import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { convertPropertyToStyleKey } from "../../utils/styleKeys";

const cssProperties = {
  borderColor: "--elf--button-border-color",
  backgroundColor: "--elf--button-background-color",
  selectedBackgroundColor: "--elf--button-selected-background-color",
  disabledColor: "--elf--button-disabled-color",
  color: "--elf--button-color",
  fontSize: "--elf--button-font-size",
  fontWeight: "--elf--button-font-weight",
  height: "--elf--button-height",
  padding: "--elf--button-padding",
  borderRadius: "--elf--button-border-radius",
};

export class Button extends UIElement {
  template() {
    const {
      type,
      size,
      disabled,
      selected,
      shape,
      quiet = undefined,
      outline = undefined,
      style = {},
      onClick,
      content,
      ...extraStyle
    } = this.props;

    const { style: styleProperties } = convertPropertyToStyleKey(extraStyle);

    const styleObject = {
      class: classnames([
        "elf--button",
        { selected, outline, quiet, [type]: true },
        {
          large: size === "large",
          small: size === "small",
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
