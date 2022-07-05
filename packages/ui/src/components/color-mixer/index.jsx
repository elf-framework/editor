import {
  checkHueColor,
  format,
  parse,
  RGBtoHSV,
  HSVtoRGB,
  HSVtoHSL,
  RGBtoHSL,
} from "@elf-framework/color";
import {
  IF,
  POINTEREND,
  POINTERMOVE,
  POINTERSTART,
  UIElement,
  isFunction,
} from "@elf-framework/sapa";


import { Button } from "../button";
import { OptionMenu } from "../option-menu";
import { HexColorEditor } from "../input-editor/HexColorEditor";
import { RGBColorEditor } from "../input-editor/RGBColorEditor";
import { HSLColorEditor } from "../input-editor/HSLColorEditor";

const COLOR_TYPES = ['hex', 'rgb', 'hsl'];

function EyeDropper(props) {
  return (
    <div class="eye-dropper">
      <Button
        onClick={async () => {
          const eyeDropper = new window.EyeDropper();

          try {
            const result = await eyeDropper.open();

            isFunction(props.onChange) && props.onChange(result.sRGBHex);
          } catch (e) {
            console.warn(e);
          }
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4473 0.6C12.6473 -0.2 11.4473 -0.2 10.6473 0.6L7.84725 3.4L7.04725 2.7C6.64725 2.3 6.04725 2.3 5.64725 2.7C5.24725 3.1 5.24725 3.7 5.64725 4.1L6.34725 4.8L0.547255 10.6C0.147255 11 -0.452745 12.5 0.547255 13.5C1.54725 14.5 3.04725 13.9 3.44725 13.5L9.24725 7.7L9.94725 8.4C10.3473 8.8 10.9473 8.8 11.3473 8.4C11.7473 8 11.7473 7.4 11.3473 7L10.6473 6.3L13.4473 3.5C14.2473 2.6 14.2473 1.4 13.4473 0.6ZM2.54725 12.5H1.54725V11.5L7.34725 5.7L8.34725 6.7C8.24725 6.7 2.54725 12.5 2.54725 12.5Z"
            fill="black"
            fill-opacity="0.8"
          />
        </svg>
      </Button>
    </div>
  );
}

class BaseSlide extends UIElement {
  template() {
    const { value, containerClass, slideClass } = this.props;
    return (
      <div class={`${containerClass} slide-view`}>
        <div class={`${slideClass} slide-bg`}>
          <div
            class="drag-pointer"
            style={{
              "--drag-point-left": value,
            }}
          ></div>
        </div>
      </div>
    );
  }

  [POINTERSTART("$el .slide-bg")]() {
    this.setState(
      {
        clicked: true,
        rect: this.$el.$(".slide-bg").rect(),
      },
      false
    );
  }

  checkClicked() {
    return this.state.clicked;
  }

  [POINTERMOVE("document") + IF("checkClicked")](e) {
    const { onChange } = this.props;
    const { x, width } = this.state.rect;
    const minX = x;
    const maxX = minX + width;

    const targetX = Math.min(Math.max(minX, e.clientX), maxX);

    const value = (targetX - minX) / width;

    if (isFunction(onChange)) {
      onChange(value);
    }
  }

  [POINTEREND("document") + IF("checkClicked")]() {
    this.setState(
      {
        clicked: false,
      },
      false
    );
    // TODO: lastChanged 이벤트를 발생시켜야함.
  }
}

class HueSlide extends UIElement {
  template() {
    const { value, onChange } = this.props;
    return (
      <BaseSlide
        value={value}
        containerClass="hue-slide"
        slideClass="hue-slide-bg"
        onChange={onChange}
      />
    );
  }
}

class OpacitySlide extends UIElement {
  template() {
    const { value, onChange } = this.props;
    return (
      <BaseSlide
        value={value}
        containerClass="opacity-slide"
        slideClass="opacity-slide-bg"
        onChange={onChange}
      />
    );
  }
}

class ColorInput extends UIElement {
  initState() {
    const { type } = this.props;

    return {
      type,
    }
  }

  makeTypedColorInput() {
    const { r, g, b, a, h, s, l, onChange } = this.props;
    const { type } = this.state;

    switch (type) {
      case "hex":
        return <div><HexColorEditor value={format({r, g, b, a}, "hex")} onChange={onChange} /></div>;
      case "rgb":
        return <div><RGBColorEditor value={format({r, g, b, a}, "rgb")} onChange={onChange} /></div>;
      case "hsl":
        return <div><HSLColorEditor value={format({h, s, l, a}, "hsl")} onChange={onChange} /></div>;
    }

    return undefined;
  }



  template() {
    const { type } = this.state;
    const input = this.makeTypedColorInput();

    return (
      <div class="color-input">
        <OptionMenu menuStyle={{
          width: 100
        }} items={COLOR_TYPES.map(it => {
          return           {
            title: it.toUpperCase(),
            selectable: true,
            closable: true,
            selected: type === it,
            onClick: (e, item) => {
              this.setState({
                type: it
              })
            },
          }          
        })}>{type.toUpperCase()}</OptionMenu>
        {input}
      </div>
    );
  }
}

export class ColorMixer extends UIElement {
  initState() {
    const { color } = this.props;
    const parsedColor = parse(color);
    const { r, g, b, a } = parsedColor;

    const { h, s, v } = RGBtoHSV(r, g, b);

    return {
      type: parsedColor.type,
      color: format({ r, g, b }, "rgb"),
      width: 240,
      height: 240,
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

    const x = width * s;
    const y = height * (1 - v);

    return (
      <div class="elf--color-mixer">
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
        <div class="elf--color-slide-area">
          {window.EyeDropper ? (
            <EyeDropper onChange={this.updateColor} />
          ) : undefined}
          <div class="slide">
            <HueSlide value={h / 360} onChange={this.updateHueColor} />
            <OpacitySlide
              r={r}
              g={g}
              b={b}
              value={a}
              onChange={this.updateOpacity}
            />
          </div>
        </div>
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
            }}
            onChange={this.updateColor}
          />
        </div>
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
