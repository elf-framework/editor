import { format, parse } from "@elf-framework/color";
import {
  UIElement,
  classnames,
  FOCUSOUT,
  FOCUSIN,
  isFunction,
  CLICK,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";
import { Grid } from "../grid";

const cssProperties = makeStyleMap("--elf--input-paint", {
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
 * RGBColorEditor
 */
export class RGBColorEditor extends UIElement {
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

    const { r, g, b, a } = parse(value);

    const properties = {
      disabled,
      placeholder: placeholder || "",
      min: 0,
      max: 255
    };

    this.setState({
      parsedColor: {
        r, g, b, a
      }
    }, false)

    return (
      <div {...styleObject}>
        <div class="elf--input-area">
          <Grid columns={3}>
            <div class="elf--input-item">
              <input class="color" data-type="r" value={r} {...properties} onKeyDown={this.keydownColor} />
            </div>
            <div class="elf--input-item">
              <input class="color" data-type="g" value={g} {...properties} onKeyDown={this.keydownColor} />
            </div>
            <div class="elf--input-item">
              <input class="color" data-type="b" value={b} {...properties} onKeyDown={this.keydownColor} />
            </div>
          </Grid>
        </div>
        {this.state.hasOpacity && (
          <div class="elf--input-opacity">
            <input
              class="opacity"
              value={`${Math.round(a * 100 * 100)/100}%`}
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
        a: Math.max(0, Math.min(1, Math.round((this.state.parsedColor.a + num) * 100)/100)) ,
      },
    }, false);

    this.runCallback(this.props.onChange);    
  }

  updateColor(type, num) {

    this.setState({
      parsedColor: {
        ...this.state.parsedColor,
        [type]: Math.max(0, Math.min(255, this.state.parsedColor[type] + num)),
      },
    }, false);

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
    e.preventDefault();
    e.stopPropagation();
    switch (e.key) {
      case "ArrowUp":
        this.increaseColor(e.target.getAttribute('data-type'));
        break;
      case "ArrowDown":
        this.decreaseColor(e.target.getAttribute('data-type'));
        break;
    }
    e.target.select();    
  }

  keydown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    switch (e.key) {
      case "ArrowUp":
        this.increaseOpacity(e);
        break;
      case "ArrowDown":
        this.decreaseOpacity(e);
        break;
    }
    e.target.select();    
  };

  onMounted() {
    if (this.state.autoFocus) {
      setTimeout(() => {
        this.refs.$input.focus();
        this.refs.$input.select();
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
    const {r, g, b, a} = parsedColor;
    return format({ r, g, b, a }, 'rgb');
  }

  set value(v) {
    this.refs.$input.value = v;
  }

  get selectedValue() {
    return document.getSelection().toString();
  }
}
