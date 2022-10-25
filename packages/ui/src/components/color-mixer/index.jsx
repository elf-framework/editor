import {
  checkHueColor,
  format,
  parse,
  RGBtoHSV,
  HSVtoRGB,
  HSVtoHSL,
} from "@elf-framework/color";
import {
  IF,
  POINTEREND,
  POINTERMOVE,
  POINTERSTART,
  UIElement,
  isFunction,
  classnames,
  useMemo,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { ColorInput } from "./ColorInput";
import { EyeDropper } from "./EyeDropper";
import { HueSlide } from "./HueSlide";
import { OpacitySlide } from "./OpacitySlide";

const cssProperties = {
  height: "--elf--color-mixer-height",
  width: "--elf--color-mixer-width",
};

export class ColorMixer extends UIElement {
  initState() {
    const { color = "red", width = 240, height = width } = this.props;
    const parsedColor = parse(color);
    const { r, g, b, a } = parsedColor;

    const { h, s, v } = RGBtoHSV(r, g, b);

    return {
      type: parsedColor.type,
      color: format({ r, g, b }, "rgb"),
      width,
      height,
      r,
      g,
      b,
      a,
      hueColor: checkHueColor(h),
      h,
      s,
      v,
    };
  }
  template() {
    const { type, h, s, v, width, height, r, g, b, a, hueColor, color } =
      this.state;
    const {
      hideSlide = false,
      hideInput = false,
      shadow,
      style = {},
      disabled,
    } = this.props;

    const x = width * s;
    const y = height * (1 - v);

    const localClass = useMemo(() => {
      return classnames("elf--color-mixer", {
        shadow,
        disabled,
      });
    }, [shadow, disabled]);

    const styleObject = {
      class: localClass,
      style: {
        ...propertyMap(
          {
            ...style,
            width,
            height,
          },
          cssProperties
        ),
      },
    };

    return (
      <div {...styleObject}>
        <div
          class="elf--color-area"
          style={{
            backgroundColor: hueColor,
          }}
        >
          <div class="saturation">
            <div class="value">
              <div
                class="drag-pointer"
                style={{
                  backgroundColor: color,
                  left: x,
                  top: y,
                }}
              ></div>
            </div>
          </div>
        </div>
        {hideSlide === false ? (
          <div class="elf--color-slide-area">
            {window.EyeDropper ? (
              <EyeDropper onChange={this.updateColor} />
            ) : undefined}
            <div class="slide">
              <HueSlide
                value={h / 360}
                onChange={this.updateHueColor}
                disabled={disabled}
              />
              <OpacitySlide
                r={r}
                g={g}
                b={b}
                value={a}
                disabled={disabled}
                onChange={this.updateOpacity}
              />
            </div>
          </div>
        ) : undefined}
        {hideInput === false ? (
          <div class="elf--color-input-area">
            <ColorInput
              {...{
                type,
                h,
                s,
                v,
                r,
                g,
                b,
                a,
                disabled,
              }}
              onChange={this.updateColor}
            />
          </div>
        ) : undefined}
      </div>
    );
  }

  formatedColor() {
    const { type, r, g, b, h, s, v, a } = this.state;
    let color = "";
    switch (type) {
      case "hex":
      case "rgb":
        color = format({ r, g, b, a }, type);
        break;
      case "hsl":
        var { h: hslH, s: hslS, l: hslL } = HSVtoHSL(h, s, v);

        color = format({ h: hslH, s: hslS, l: hslL, a }, type);
        break;
      case "hsv":
        color = format({ h, s, v, a }, type);
        break;
    }

    return color;
  }

  changeColor() {
    const { onChange } = this.props;
    let color = this.formatedColor();
    if (isFunction(onChange)) {
      onChange(color);
    }
  }

  lastChangeColor() {
    const { onLastChange } = this.props;
    let color = this.formatedColor();
    if (isFunction(onLastChange)) {
      onLastChange(color);
    }
  }

  async openEyeDropper() {
    const eyeDropper = new window.EyeDropper();

    try {
      const result = await eyeDropper.open();

      this.updateColor(result.sRGBHex);
    } catch (e) {
      console.warn(e);
    }
  }

  updateOpacity = (a) => {
    this.setState({
      a,
    });

    this.changeColor();
  };

  updateHueColor = (h) => {
    h = h * 360;
    const { s, v, a } = this.state;
    const { r, g, b } = HSVtoRGB(h, s, v);

    this.setState({
      color: format({ r, g, b }, "rgb"),
      r,
      g,
      b,
      a,
      hueColor: checkHueColor(h / 360),
      h,
      s,
      v,
    });
    this.changeColor();
  };

  updateColor = (color) => {
    const parsedColor = parse(color);
    const { r, g, b, a } = parsedColor;

    const { h, s, v } = RGBtoHSV(r, g, b);

    this.setState({
      color: format({ r, g, b }, "rgb"),
      r,
      g,
      b,
      a,
      hueColor: checkHueColor(h / 360),
      h,
      s,
      v,
    });

    this.changeColor();
  };

  [POINTERSTART("$el .elf--color-area")](e) {
    this.setState(
      {
        clicked: true,
        rect: this.$el.$(".elf--color-area").rect(),
        clientX: e.clientX,
        clientY: e.clientY,
      },
      false
    );
  }

  checkClicked() {
    return this.state.clicked;
  }

  [POINTERMOVE("document") + IF("checkClicked")](e) {
    const { x, y, width, height } = this.state.rect;
    const minX = x;
    const maxX = minX + width;

    const minY = y;
    const maxY = minY + height;

    const targetX = Math.min(Math.max(minX, e.clientX), maxX);
    const targetY = Math.min(Math.max(minY, e.clientY), maxY);

    const s = (targetX - minX) / width;
    const v = 1 - (targetY - minY) / height;

    this.updateSaturationValue(s, v);
  }

  [POINTEREND("document") + IF("checkClicked")](e) {
    this.setState(
      {
        clicked: false,
      },
      false
    );

    // 움직이지 않으면 이벤트 발생을 하지 않음.
    if (this.state.clientX === e.clientX && this.state.clientY === e.clientY) {
      return;
    }

    this.lastChangeColor();
  }

  updateSaturationValue(s, v) {
    const { r, g, b } = HSVtoRGB(this.state.h, s, v);
    this.setState({
      r,
      g,
      b,
      s,
      v,
      color: format({ r, g, b }, "rgb"),
    });

    this.changeColor();
  }
}

registerComponent("ColorMixer", ColorMixer);
registerComponent("color-mixer", ColorMixer);
registerComponent("colormixer", ColorMixer);
