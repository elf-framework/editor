import { classnames, UIElement, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--progressbar", {
  backgroundColor: true,
  color: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
});

const PERCENT_NUMBER = 100;

function converValueToPercent(value) {
  return value + "%";
}

export class ProgressBar extends UIElement {
  template() {
    const {
      min = 0,
      max = PERCENT_NUMBER,
      value = min,
      showValue = true,
      valueFunction = converValueToPercent,
      title,
      variant = "default",
      size = "medium",
      style = {},
      shape = "round",

      indeterminate = false,
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--progressbar", {
        [variant]: true,
        [size]: true,
        [shape]: true,
        indeterminate,
      });
    }, [variant, size, indeterminate, shape]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    const localValue = (value - min) / (max - min);
    const percentValue = Math.round(localValue * PERCENT_NUMBER);

    return (
      <div {...styleObject}>
        {title ? (
          <div class="title-area">
            <label>{title}</label>
            {showValue && !indeterminate ? (
              <span> {valueFunction(percentValue)} </span>
            ) : undefined}
          </div>
        ) : undefined}
        <div class="progress-area">
          <div class="progress" style={{ width: `${percentValue}%` }}></div>
        </div>
      </div>
    );
  }
}

registerComponent("progressbar", ProgressBar);
registerComponent("ProgressBar", ProgressBar);
registerComponent("progress-bar", ProgressBar);
