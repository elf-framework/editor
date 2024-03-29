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

export class TextAreaEditor extends UIElement {
  initState() {
    const {
      autoFocus = false,
      focused,
      hover = false,
      value,
      placeholder,
      disabled,
    } = this.props;

    return {
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
      value,
      disabled,
    };
  }

  template() {
    const {
      icon,
      tools,
      size = "medium",
      readOnly = false,
      invalid,
      rows,
      style,
      resizable,
    } = this.props;
    const {
      focused = false,
      hover = false,
      value,
      placeholder,
      disabled,
    } = this.state;

    const localClass = useMemo(() => {
      return classnames([
        "elf--input-editor textarea",
        {
          focused,
          hover,
          disabled,
          icon,
          invalid,
          resizable,
          [size]: true,
          readonly: readOnly,
        },
      ]);
    }, [focused, hover, disabled, icon, invalid, size, readOnly, resizable]);

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
      disabled,
      rows,
      readonly: readOnly ? "readonly" : undefined,
      placeholder: placeholder || "",
      value: value || "",
    };

    return (
      <div {...styleObject}>
        {icon ? <div class="elf--input-editor-icon">{icon}</div> : undefined}
        <div class="elf--input-area">
          <div class="elf--input-item">
            <textarea ref="$input" {...properties} {...inputEvents}>
              {value}
            </textarea>
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

registerComponent("TextAreaEditor", TextAreaEditor);
registerComponent("textareaeditor", TextAreaEditor);
registerComponent("text-area-editor", TextAreaEditor);
