import { format, parse } from "@elf-framework/color";
import {
  UIElement,
  classnames,
  FOCUSOUT,
  FOCUSIN,
  isFunction,
  CLICK,
  isUndefined,
  useMemo,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

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
 * HexColorEditor
 */
export class HexColorEditor extends UIElement {
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
    const { icon, value } = this.props;
    const {
      style = {},
      focused = false,
      hover = false,
      placeholder,
      disabled,
    } = this.state;

    const { r, g, b, a } = parse(value);

    const localClass = useMemo(() => {
      return classnames([
        "elf--input-paint",
        {
          focused: focused,
          hover: hover,
          disabled: disabled,
          icon: icon,
          invalid: this.isInvalidColor({ r, g, b, a }),
        },
      ]);
    }, [focused, hover, disabled, icon, r, g, b, a]);

    const styleObject = {
      class: localClass,
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
      disabled,
      placeholder: placeholder || "",
      value: format({ r, g, b }, "hex").replace("#", ""),
    };

    this.setState(
      {
        parsedColor: {
          r,
          g,
          b,
          a,
        },
      },
      false
    );

    return (
      <div {...styleObject}>
        <div class="elf--input-area">
          <div class="elf--input-item">
            <input
              class="color"
              type="text"
              data-type="hex"
              maxlength={6}
              {...properties}
              {...inputEvents}
              onKeyDown={this.keydownColor}
              onKeyUp={this.keyupColor}
            />
          </div>
        </div>
        {this.state.hasOpacity && (
          <div class="elf--input-opacity">
            <input
              class="opacity"
              value={`${Math.round(a * 100 * 100) / 100}%`}
              onKeyDown={this.keydown}
            />
          </div>
        )}
      </div>
    );
  }

  updateOpacity(num) {
    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          a: Math.max(
            0,
            Math.min(
              1,
              Math.round((this.state.parsedColor.a + num) * 100) / 100
            )
          ),
        },
      },
      false
    );

    this.runCallback(this.props.onChange);
  }

  updateFullColor(parsedColor) {
    this.setState(
      {
        parsedColor,
      },
      false
    );

    this.runCallback(this.props.onChange);
  }

  updateColor(type, num) {
    const lastValue = Math.max(
      0,
      Math.min(255, this.state.parsedColor[type] + num)
    );

    if (this.state.parsedColor[type] === lastValue) {
      return;
    }

    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          [type]: Math.max(
            0,
            Math.min(255, this.state.parsedColor[type] + num)
          ),
        },
      },
      false
    );

    this.runCallback(this.props.onChange);
  }

  increaseColor(type) {
    this.updateColor(type, 1);
  }

  decreaseColor(type) {
    this.updateColor(type, -1);
  }

  increaseOpacity() {
    this.updateOpacity(0.01);
  }

  decreaseOpacity() {
    this.updateOpacity(-0.01);
  }

  keydownColor = (e) => {
    const startIndex = Math.floor(e.target.selectionStart / 2) * 2;

    let type = "";
    if (startIndex < 2) {
      type = "r";
    } else if (startIndex < 4) {
      type = "g";
    } else {
      type = "b";
    }

    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        this.increaseColor(type);
        e.target.setSelectionRange(startIndex, startIndex + 2);
        break;
      case "ArrowDown":
        e.preventDefault();
        this.decreaseColor(type);
        e.target.setSelectionRange(startIndex, startIndex + 2);

        break;
    }
  };

  isInvalidColor(color) {
    return (
      isNaN(color.r) ||
      isNaN(color.g) ||
      isNaN(color.b) ||
      isNaN(color.a) ||
      isUndefined(color.r) ||
      isUndefined(color.g) ||
      isUndefined(color.b) ||
      isUndefined(color.a)
    );
  }

  keyupColor = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      // noop
    } else {
      if (e.target.value.length === 3 || e.target.value.length === 6) {
        const color = parse("#" + e.target.value);

        if (color.type === "hex") {
          if (this.isInvalidColor(color) === false) {
            this.updateFullColor(color);
          }
        }
      }
    }
  };

  keydown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    switch (e.key) {
      case "ArrowUp":
        this.increaseOpacity(e);
        e.target.select();
        break;
      case "ArrowDown":
        this.decreaseOpacity(e);
        e.target.select();
        break;
    }
  };

  onMounted() {
    if (this.state.autoFocus) {
      setTimeout(() => {
        const $el = this.$el.$("input[data-type='hex']");

        $el.focus();
        $el.select();
      }, 10);
    }
  }

  runCallback(callback) {
    if (isFunction(callback)) {
      callback(this.value, this);
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
    const { parsedColor } = this.state;
    const { r, g, b, a } = parsedColor;
    return format({ r, g, b, a }, "hex");
  }

  set value(v) {
    this.refs.$input.value = v;
  }

  get selectedValue() {
    return document.getSelection().toString();
  }
}

registerComponent("HexColorEditor", HexColorEditor);
registerComponent("hex-color-editor", HexColorEditor);
registerComponent("hexcoloreditor", HexColorEditor);
