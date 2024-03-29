import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Animation } from "../animation";
import { ProgressCircle } from "../progress-circle";

const cssProperties = makeCssVariablePrefixMap("--elf--button", {
  borderColor: true,
  backgroundColor: true,
  selectedBackgroundColor: true,
  disabledColor: true,
  color: true,
  textColor: true,
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
      shape = "none",
      quiet = false,
      outline = false,
      thin = false,
      closable = false,
      place = "",
      style = {},
      href = "",
      target = "_blank",
      content,
      class: className,
      iconOnly = false,
      justified = false,
      pending = false,
      play = false,
      hover = false,
      as = "button",
      hasMinWidth = false,
      ...extraProps
    } = this.props;

    const localClass = useMemo(() => {
      return classnames([
        "elf--button",
        {
          outline,
          focused,
          quiet,
          selected,
          closable,
          justified,
          [variant]: true,
          [size]: true,
          [shape]: true,
          [place]: true,
          thin,
          hover,
          "icon-only": iconOnly,
          "has-min-width": hasMinWidth,
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
      hover,
      hasMinWidth,
      thin,
    ]);

    const styleObject = {
      class: localClass,
      disabled: disabled ? "disabled" : undefined,
      style: propertyMap(style, cssProperties),
      ...extraProps,
    };

    const buttonContent = (
      <span>
        {pending ? (
          <Animation.spin play={play}>
            <ProgressCircle value={80} size={size} variant={variant} />
          </Animation.spin>
        ) : (
          content || ""
        )}
      </span>
    );

    if (as === "link") {
      return (
        <a {...styleObject} href={href} target={target}>
          {buttonContent}
        </a>
      );
    } else {
      return <button {...styleObject}>{buttonContent}</button>;
    }
  }
}

registerComponent("button", Button);
registerComponent("btn", Button);
registerComponent("Button", Button);
