import {
  classnames,
  isFunction,
  UIElement,
  useCallback,
  useMemo,
} from "@elf-framework/sapa";

import { usePointerStart } from "../../hooks/usePointerStart";
import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--slider", {
  backgroundColor: true,
  backgroundImage: true,
  borderRadius: true,
  fontSize: true,
  duration: true,
  activeColor: true,
  width: true,
  height: true,
  handlBackgroundColor: true,
  gap: true,
});

function initValue(v) {
  return v;
}

function calculateRoundValue(min, max, step, value) {
  if (value === 0) return value;

  if (max < value) return max;
  if (min > value) return min;

  if (step % 1 !== 0) {
    // unit 계산
    const total = max - min;
    const count = total / step;

    const realValueCount = Math.floor(count * ((value - min) / total));

    const precison = 1 / step;
    const result = Math.round(realValueCount * step * precison);
    const minResult = min * precison;

    return (result + minResult) / precison;
  }

  return value - (value % step);
}

function calculateValue({ min = 0, max = 100, step, left, width, currentX }) {
  const currentValue = calculateRoundValue(
    min,
    max,
    step,
    ((currentX - left) / width) * (max - min) + min
  );
  const value = Math.max(min, Math.min(max, currentValue));

  return value;
}

class SingleSlider extends UIElement {
  template() {
    const {
      label,
      labelPosition = "top",
      min = 0,
      max = 100,
      step = 1,
      value = min,
      valuePlacement = "none",
      showTrigger = "always",
      showValue = false,
      size = "medium",
      variant = "default",
      fill = false,
      fillOffset = 0,
      disabled = false,
      readOnly = false,
      style = {},
      valueFunc = initValue,
      onInput,
      fitted = false,
    } = this.props;

    const onInputCallback = useCallback(
      (e) => {
        const { left, width } = this.state;
        const value = calculateValue({
          min,
          max,
          step,
          left,
          width,
          currentX: e.clientX,
        });

        if (value !== this.props.value) {
          onInput && onInput(value);
        }
      },
      [onInput, min, max, step]
    );

    usePointerStart(
      "$el .range-track",
      (e) => {
        const { left, width } = this.refs.$track.getBoundingClientRect();

        this.setState(
          {
            left,
            width,
          },
          false
        );

        onInputCallback(e);
      },
      (e) => {
        onInputCallback(e);
      }
    );

    const localClass = useMemo(() => {
      return classnames("elf--slider", {
        [variant]: true,
        [size]: true,
        disabled,
        readonly: readOnly,
        ["placement-" + valuePlacement]: true,
        [showTrigger]: true,
        ["show-value"]: showValue,
        ["label-position-" + labelPosition]: true,
        fitted,
      });
    }, [
      variant,
      size,
      disabled,
      readOnly,
      valuePlacement,
      showTrigger,
      showValue,
      labelPosition,
      fitted,
    ]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    const currentValue = Math.max(min, Math.min(max, value));
    const currenValueOffset = ((currentValue - min) / (max - min)) * 100;
    const progressStartOffset = ((fillOffset - min) / (max - min)) * 100;

    const isPrevValue = currentValue < fillOffset;
    const startOffset = Math.min(currenValueOffset, progressStartOffset);
    const width = Math.abs(currenValueOffset - progressStartOffset);

    const lastValue = isFunction(valueFunc)
      ? valueFunc(currentValue)
      : currentValue;

    return (
      <div {...styleObject}>
        {label ? (
          <div class="label-area">
            <label class="label">{label}</label>
            {labelPosition === "top" ? (
              <span class="value">{lastValue}</span>
            ) : undefined}
          </div>
        ) : undefined}
        <div class="range-area">
          <div class="range-track" ref="$track">
            {fill ? (
              <div
                class="range-progress"
                style={{ left: `${startOffset}%`, width: `${width}%` }}
              ></div>
            ) : undefined}
            <div
              class="thumb"
              ref="$thumb"
              style={{
                left: isPrevValue
                  ? `${startOffset}%`
                  : `${startOffset + width}%`,
              }}
            >
              {showValue && !label ? (
                <div class="thumb-value">{lastValue}</div>
              ) : undefined}
            </div>
          </div>
        </div>
        {label && labelPosition === "side" ? (
          <div class="value-area">
            <span class="value">{lastValue}</span>
          </div>
        ) : undefined}
      </div>
    );
  }
}

class RangeSlider extends UIElement {
  template() {
    return <div></div>;
  }
}

export class Slider extends UIElement {
  template() {
    const { type = "single", ...extraProps } = this.props;

    return type === "single" ? (
      <SingleSlider {...extraProps} />
    ) : (
      <RangeSlider {...extraProps} />
    );
  }
}

registerComponent("slider", Slider);
registerComponent("Slider", Slider);
