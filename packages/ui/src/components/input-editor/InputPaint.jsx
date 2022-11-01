import { format, parse } from "@elf-framework/color";
import {
  UIElement,
  classnames,
  FOCUSOUT,
  FOCUSIN,
  isFunction,
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

export class InputPaint extends UIElement {
  initState() {
    const {
      autoFocus = false,
      focused,
      hover = false,
      hasOpacity = true,
    } = this.props;

    return {
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      hasOpacity,
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
    } = this.props;
    const { style = {}, focused = false, hover = false } = this.state;

    const parsedColor = parse(value);

    const styleObject = {
      class: classnames([
        "elf--input-paint",
        {
          focused: focused,
          hover: hover,
          disabled: disabled,
          icon: icon,
        },
      ]),
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

    const { r, g, b } = parsedColor;

    const properties = {
      disabled,
      placeholder: placeholder || "",
      value: format({ r, g, b }, "hex"),
    };

    return (
      <div {...styleObject}>
        {hideColorView ? undefined : (
          <div
            class="elf--input-paint-icon"
            onClick={(e) => {
              onClickColorView && onClickColorView(e, this.value);
            }}
          >
            <ColorView color={value} />
          </div>
        )}

        <div class="elf--input-area">
          <div class="elf--input-item">
            <input
              class="color"
              ref="$input"
              {...properties}
              {...inputEvents}
            />
          </div>
        </div>
        {this.state.hasOpacity && (
          <div class="elf--input-opacity">
            <input
              class="opacity"
              value={`${Math.round(parsedColor.a * 100 * 100) / 100}%`}
              onKeyUp={this.keyup}
            />
          </div>
        )}
      </div>
    );
  }

  updateOpacity(num) {
    this.setState({
      parsedColor: {
        ...this.state.parsedColor,
        a: this.state.parsedColor.a + num,
      },
    });
  }

  increaseOpacity() {
    this.updateOpacity(0.01);
  }

  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }

  keyup = (e) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp":
        this.increaseOpacity(e);
        break;
      case "ArrowDown":
        this.decreaseOpacity(e);
        break;
    }
  };

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
