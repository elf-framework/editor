import {
  UIElement,
  classnames,
  FOCUSOUT,
  FOCUSIN,
  isFunction,
  useMemo,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--input-editor", {
  width: true,
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
  paddingRight: true,
});

export class InputEditor extends UIElement {
  initState() {
    const { autoFocus = false, focused = false, hover = false } = this.props;

    return {
      autoFocus,
      focused,
      hover: hover || false,
    };
  }

  template() {
    const {
      icon,
      tools,
      size = "medium",
      readOnly = false,
      invalid,
      style,
      value,
      min,
      max,
      step,
      placeholder,
      disabled,
      type = "text",
    } = this.props;
    const { hover = false, focused = false } = this.state;

    const localClass = useMemo(() => {
      return classnames([
        "elf--input-editor",
        {
          focused,
          hover,
          disabled,
          icon,
          invalid,
          [size]: true,
          readonly: readOnly,
        },
      ]);
    }, [focused, hover, disabled, icon, invalid, size, readOnly]);

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

    const properties = {
      type,
      disabled,
      readonly: readOnly ? "readonly" : undefined,
      placeholder: placeholder || "",
      value: value || "",
      min,
      max,
      step,
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

registerComponent("input-editor", InputEditor);
registerComponent("InputEditor", InputEditor);
registerComponent("inputeditor", InputEditor);
