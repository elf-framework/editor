import {
  UIElement,
  classnames,
  FOCUSOUT,
  FOCUSIN,
  isFunction,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";

const cssProperties = makeStyleMap("--elf--input-editor", {
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

export class InputEditor extends UIElement {
  initState() {
    const {
      style = {},
      type = "text",
      autoFocus = false,
      focused,
      hover = false,
      value,
      placeholder,
      disabled,
    } = this.props;

    return {
      style,
      type,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      disabled,
    };
  }

  template() {
    const { icon, tools } = this.props;
    const {
      style = {},
      type = "text",
      focused = false,
      hover = false,
      value,
      placeholder,
      disabled,
    } = this.state;

    const styleObject = {
      class: classnames([
        "elf--input-editor",
        {
          focused,
          hover,
          disabled,
          icon,
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

    const properties = {
      type,
      disabled,
      placeholder: placeholder || "",
      value: value || "",
    };

    return (
      <div {...styleObject}>
        {icon ? <div class="elf--input-editor-icon">{icon}</div> : undefined}
        <div class="elf--input-area">
          <div class="elf--input-item">
            <input ref="$input" {...properties} {...inputEvents} />
          </div>
        </div>
        {tools ? tools : undefined}
      </div>
    );
  }

  onMounted() {
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

  [FOCUSIN("$input")](e) {
    this.setState({
      focused: true,
    });

    this.runCallback(this.props.onFocus, e);
  }

  [FOCUSOUT("$input")](e) {
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
