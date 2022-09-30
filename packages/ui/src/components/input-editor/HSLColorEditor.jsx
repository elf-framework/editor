import { format, parse, RGBtoHSL } from "@elf-framework/color";
import {
  UIElement,
  classnames,
  FOCUSOUT,
  FOCUSIN,
  isFunction,
  CLICK,
  useMemo,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Grid } from "../grid";

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
 * HSLColorEditor
 */
export class HSLColorEditor extends UIElement {
  initState() {
    const {
      style = {},
      autoFocus = false,
      focused,
      hover = false,
      placeholder,
      disabled,
      hasOpacity = true,
    } = this.props;

    return {
      style,
      autoFocus,
      hover: hover || false,
      focused: focused || false,
      placeholder,
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
    const { h, s, l } = RGBtoHSL(r, g, b);

    const localClass = useMemo(() => {
      return classnames([
        "elf--input-paint",
        {
          focused: focused,
          hover: hover,
          disabled: disabled,
          icon: icon,
        },
      ]);
    }, [focused, hover, disabled, icon]);

    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    const properties = {
      disabled,
      placeholder: placeholder || "",
      min: 0,
      max: 255,
    };

    this.setState(
      {
        parsedColor: {
          h,
          s,
          l,
          a,
        },
      },
      false
    );

    return (
      <div {...styleObject}>
        <div class="elf--input-area">
          <Grid columns={3}>
            <div class="elf--input-item">
              <input
                class="color"
                type="text"
                tabIndex={1}
                data-type="h"
                value={h}
                {...properties}
                onKeyDown={this.keydownColor}
              />
            </div>
            <div class="elf--input-item">
              <input
                class="color"
                type="text"
                tabIndex={2}
                data-type="s"
                value={s}
                {...properties}
                onKeyDown={this.keydownColor}
              />
            </div>
            <div class="elf--input-item">
              <input
                class="color"
                type="text"
                tabIndex={3}
                data-type="l"
                value={l}
                {...properties}
                onKeyDown={this.keydownColor}
              />
            </div>
          </Grid>
        </div>
        {this.state.hasOpacity && (
          <div class="elf--input-opacity">
            <input
              type="text"
              tabIndex={4}
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
    this.setState({
      parsedColor: {
        ...this.state.parsedColor,
        a: Math.max(
          0,
          Math.min(1, Math.round((this.state.parsedColor.a + num) * 100) / 100)
        ),
      },
    });

    this.runCallback(this.props.onChange);
  }

  updateColor(type, num) {
    const data = {};
    if (type === "h") {
      data[type] = Math.max(
        0,
        Math.min(360, this.state.parsedColor[type] + num)
      );
    } else if (type === "s") {
      data[type] = Math.max(
        0,
        Math.min(100, this.state.parsedColor[type] + num)
      );
    } else if (type === "l") {
      data[type] = Math.max(
        0,
        Math.min(100, this.state.parsedColor[type] + num)
      );
    }

    this.setState(
      {
        parsedColor: {
          ...this.state.parsedColor,
          ...data,
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
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        this.increaseColor(e.target.getAttribute("data-type"));
        e.target.select();
        break;
      case "ArrowDown":
        e.preventDefault();
        this.decreaseColor(e.target.getAttribute("data-type"));
        e.target.select();
        break;
    }
  };

  keydown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        this.increaseOpacity(e);
        e.target.select();
        break;
      case "ArrowDown":
        e.preventDefault();
        this.decreaseOpacity(e);
        e.target.select();
        break;
      case "Tab":
        e.preventDefault();
        var $el = this.$el.$("input[data-type='h']");
        $el.focus();
        $el.select();
        break;
    }
  };

  onMounted() {
    if (this.state.autoFocus) {
      setTimeout(() => {
        const $el = this.$el.$("input[data-type='h']");

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
    const { h, s, l, a } = parsedColor;
    return format({ h, s, l, a }, "hsl");
  }

  set value(v) {
    this.refs.$input.value = v;
  }

  get selectedValue() {
    return document.getSelection().toString();
  }
}

registerComponent("HSLColorEditor", HSLColorEditor);
registerComponent("hsl-color-editor", HSLColorEditor);
registerComponent("hslcoloreditor", HSLColorEditor);
