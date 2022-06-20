import { UIElement, classnames, FOCUSOUT, FOCUSIN, isFunction } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";

const cssProperties = makeStyleMap('--elf--input-editor', {
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
  height: true,
})

export class TextAreaEditor extends UIElement {

  initState() {
    const { style = {}, autoFocus = false, focused, hover = false, value, placeholder, disabled } = this.props;

    return {
      style,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      disabled
    }
  }

  template() {
    const { icon } = this.props;
    const { style = {}, focused = false, hover = false, value, placeholder, disabled } = this.state;

    const styleObject = {
      class: classnames([
        "elf--input-editor",
        "multiline",
        {
          "focused": focused,
          "hover": hover,
          "disabled": disabled,
          "icon": icon,
        }
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
      onCut:  this.props.onCut,
      onCopy: this.props.onCopy,
    }

    const properties = {
      disabled,
      placeholder,
      value,
    }

    return (
      <div {...styleObject}>
        <div class="elf--input-area">
          <div class="elf--input-item">
            <textarea ref="$input" {...properties} {...inputEvents}>{value}</textarea>
          </div>
        </div>
      </div>
    );
  }

  afterRender() {

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

  [FOCUSIN("$input")] (e) {
    this.setState({
      focused: true,
    })

    this.runCallback(this.props.onFocus, e);
  }

  [FOCUSOUT("$input")] (e) {
    this.setState({
      focused: false,
    })

    this.runCallback(this.props.onBlur, e);    
  }

  get value() {
    return this.refs.$input.value;
  }

  set value(v) {
    this.refs.$input.value = v;
  }
}