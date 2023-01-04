import { format, parse } from "@elf-framework/color";
import {
  UIElement,
  classnames,
  FOCUSOUT,
  FOCUSIN,
  isFunction,
  useMemo,
  isUndefined,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { ColorView } from "../color/ColorView";

const cssProperties = makeCssVariablePrefixMap("--elf--input-paint", {
  borderColor: true,
  backgroundColor: true,
  disabledColor: true,
  color: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
  placeholderColor: true,
  emptyColor: true,
});

function normalizeAlpha(a) {
  a = Math.round(a * 100) / 100;
  return Math.min(1, Math.max(0, a));
}

export class InputPaint extends UIElement {
  initState() {
    const {
      autoFocus = false,
      focused,
      hover = false,
      hasOpacity = true,
      value,
    } = this.props;

    return {
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      hasOpacity,
      originalValue: value,
    };
  }

  template() {
    const {
      icon,
      hideColorView = false,
      onClickColorView,
      disabled,
      placeholder,
      value,
      sync = false,
    } = this.props;
    const { style = {}, focused = false, hover = false } = this.state;

    if (!this.state.parsedColor || sync) {
      this.state.parsedColor = parse(value);
    }

    const localClass = useMemo(() => {
      return classnames([
        "elf--input-paint",
        {
          focused,
          hover,
          disabled,
          icon,
        },
      ]);
    }, [focused, hover, disabled, icon]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    const inputEvents = {
      onInput: this.props.onInput,
      onChange: this.props.onChange,
      onKeyDown: this.props.onKeyDown,
      onKeyUp: this.props.onKeyUp,
      onKeyPress: this.props.onKeyPress,
      onSelect: this.props.onSelect,
      onPaste: this.props.onPaste,
      onCut: this.props.onCut,
      onCopy: this.props.onCopy,
    };

    const { r, g, b } = this.state.parsedColor;

    const properties = {
      disabled,
      placeholder: placeholder || "",
      value: format({ r, g, b }, "hex"),
    };

    const colorString = format(
      this.state.parsedColor,
      this.state.parsedColor.type
    );

    this.state.parsedColor.a = normalizeAlpha(this.state.parsedColor.a);

    const opacityString = `${100 * this.state.parsedColor.a}%`;

    return (
      <div {...styleObject}>
        {hideColorView ? undefined : (
          <div
            class="elf--input-paint-icon"
            onClick={(e) => {
              onClickColorView && onClickColorView(e, colorString);
            }}
          >
            <ColorView color={colorString} />
          </div>
        )}

        <div class="elf--input-area">
          <div class="elf--input-item">
            <input
              class="color"
              ref="$input"
              {...properties}
              {...inputEvents}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();

                  const parsedValue = parse(e.target.value);

                  if (
                    isUndefined(parsedValue.r) ||
                    isUndefined(parsedValue.g) ||
                    isUndefined(parsedValue.b)
                  ) {
                    return;
                  }

                  const a = normalizeAlpha(this.state.parsedColor.a);

                  this.state.parsedColor = {
                    ...parsedValue,
                    a,
                  };
                  this.state.originalValue = e.target.value;

                  this.runOnChange();

                  this.refresh();
                }
              }}
            />
          </div>
        </div>
        {this.state.hasOpacity && (
          <div
            class="elf--input-opacity"
            data-opacity-string-length={opacityString.length}
          >
            <input
              class="opacity"
              value={opacityString}
              onKeyDown={(e) => {
                e.preventDefault();
                switch (e.key) {
                  case "ArrowUp":
                    this.updateOpacity(0.01);
                    break;
                  case "ArrowDown":
                    this.updateOpacity(-0.01);
                    break;
                }
              }}
            />
          </div>
        )}
      </div>
    );
  }

  runOnChange() {
    this.runCallback(this.props.onChange, format(this.state.parsedColor));
  }

  updateOpacity(num) {
    const color = this.state.parsedColor;

    color.a += num;
    color.a = normalizeAlpha(color.a);

    this.runOnChange();

    this.refresh();
  }

  onMounted() {
    super.onMounted();

    if (this.state.autoFocus) {
      setTimeout(() => {
        this.refs.$input.focus();
        this.refs.$input.select();
      }, 10);
    }
  }

  runCallback(callback, e) {
    if (isFunction(callback)) {
      callback(e, this);
    }
  }

  [FOCUSIN("$el input")](e) {
    this.setState({
      focused: true,
    });
    e.target.select();
    this.runCallback(this.props.onFocus, e);
  }

  [FOCUSOUT("$el input")](e) {
    this.setState({
      focused: false,
    });

    this.runCallback(this.props.onBlur, e);
  }

  get value() {
    return this.refs.$input.value;
  }

  set value(v) {
    this.refs.$input.value = v;
  }

  get selectedValue() {
    return document.getSelection().toString();
  }
}

registerComponent("InputPaint", InputPaint);
registerComponent("input-paint", InputPaint);
registerComponent("inputpaint", InputPaint);
