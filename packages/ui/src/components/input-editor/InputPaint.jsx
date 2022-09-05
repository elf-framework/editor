import { format, parse } from "@elf-framework/color";
import {
  UIElement,
  classnames,
  FOCUSOUT,
  FOCUSIN,
  isFunction,
  CLICK,
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

/**
 * input 은 어떻게 정의를 해야 괜찮을까?
 * input, textarea 같은 form 의 한 요소는
 * value 라는 자체 상태를 가진다.
 *
 * 내부에서 저 상태를 유지하고 있는 것은 컨트롤 하지 않겠다는 의미가 된다.
 *
 * 그래서 리액트에서는 Uncontrolled 이라는 개념을 사용한다.
 * 나도 그래야 할까?
 *
 * props 로 넘어오는 value 와 state 의 value 를 나눠서 생각해야할까?
 *
 * 이걸 나누지 않으면 어떻게 되는거지?
 */
export class InputPaint extends UIElement {
  initState() {
    const {
      style = {},
      autoFocus = false,
      focused,
      hover = false,
      value,
      placeholder,
      disabled,
      hasOpacity = true,
    } = this.props;

    const parsedColor = parse(value);

    return {
      style,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      parsedColor,
      disabled,
      hasOpacity,
    };
  }

  template() {
    const { icon, hideColorView = false } = this.props;
    const {
      style = {},
      focused = false,
      hover = false,
      value,
      placeholder,
      disabled,
      parsedColor,
    } = this.state;

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
      style: {
        ...propertyMap(style, cssProperties),
      },
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
          <div class="elf--input-paint-icon">
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
              value={`${parsedColor.a * 100}%`}
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

  [CLICK("$el .elf--input-paint-icon")](e) {
    this.props.onClickColorView?.(e);
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
