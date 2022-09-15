import { classnames, UIElement, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--progress-circle", {
  backgroundColor: true,
  color: true,
  duration: true,
  offset: true,
  width: true,
});

const PERCENT_NUMBER = 100;

export class ProgressCircle extends UIElement {
  template() {
    const {
      min = 0,
      max = PERCENT_NUMBER,
      value = min,

      variant = "default",
      size = "medium",
      style = {},

      indeterminate = false,
      animated = false,
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--progress-circle", {
        [variant]: true,
        [size]: true,
        animated,
        indeterminate,
      });
    }, [variant, size, indeterminate, animated]);
    const localValue = (value - min) / (max - min);
    const percentValue = localValue;
    const styleObject = {
      class: localClass,
      style: propertyMap(
        {
          ...style,
          offset: percentValue,
        },
        cssProperties
      ),
    };

    return (
      <div {...styleObject}>
        <div class="progress-area">
          <svg>
            <circle class="progress-circle track" r="50%" cx="50%" cy="50%" />
            <circle class="progress-circle fill" r="50%" cx="50%" cy="50%" />
          </svg>
        </div>
      </div>
    );
  }
}

registerComponent("progress-circle", ProgressCircle);
registerComponent("progresscircle", ProgressCircle);
registerComponent("ProgressCircle", ProgressCircle);
