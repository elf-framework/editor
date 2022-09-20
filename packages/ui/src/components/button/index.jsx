import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

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
      size = "medium",
      disabled,
      selected,
      shape = "rect",
      quiet = false,
      outline = false,
      place = "",
      style = {},
      onClick,
      content,
      ...extraStyle
    } = this.props;

    const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);

    const localClass = useMemo(() => {
      return classnames([
        "elf--button",
        {
          selected,
          outline,
          quiet,
          [variant]: true,
          [size]: true,
          [shape]: true,
          [place]: true,
        },
      ]);
    }, [variant, size, selected, shape, quiet, outline, place]);

    const styleObject = {
      class: localClass,
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
