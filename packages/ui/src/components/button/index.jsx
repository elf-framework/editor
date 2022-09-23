import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import {
  makeCssVariablePrefixMap,
  splitStyleKeyAndNoneStyleKey,
} from "../../utils/styleKeys";
import { Animation } from "../animation";
import { ProgressCircle } from "../progress-circle";

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
      focused,
      shape = "rect",
      quiet = false,
      outline = false,
      closable = false,
      place = "",
      style = {},
      onClick,
      content,
      class: className,
      iconOnly = false,
      justified = false,
      pending = false,
      play = false,
      ...extraStyle
    } = this.props;

    const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);

    const localClass = useMemo(() => {
      return classnames([
        "elf--button",
        {
          selected,
          outline,
          focused,
          quiet,
          closable,
          justified,
          [variant]: true,
          [size]: true,
          [shape]: true,
          [place]: true,
          "icon-only": iconOnly,
        },
        className,
      ]);
    }, [
      variant,
      size,
      selected,
      shape,
      quiet,
      outline,
      place,
      closable,
      iconOnly,
      className,
      justified,
      focused,
    ]);

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
        <span>
          {pending ? (
            <Animation.spin play={play}>
              <ProgressCircle value={50} size={size} variant={variant} />
            </Animation.spin>
          ) : (
            content || ""
          )}
        </span>
      </button>
    );
  }
}

registerComponent("button", Button);
registerComponent("btn", Button);
registerComponent("Button", Button);
