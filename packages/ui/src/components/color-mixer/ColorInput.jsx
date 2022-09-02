import { format, RGBtoHSL } from "@elf-framework/color";
import { UIElement } from "@elf-framework/sapa";

import { HexColorEditor } from "../input-editor/HexColorEditor";
import { HSLColorEditor } from "../input-editor/HSLColorEditor";
import { RGBColorEditor } from "../input-editor/RGBColorEditor";
import { OptionMenu } from "../option-menu";

const COLOR_TYPES = ["hex", "rgb", "hsl"];

export class ColorInput extends UIElement {
  initState() {
    const { type } = this.props;

    return { type };
  }

  makeTypedColorInput() {
    const { r, g, b, a, onChange } = this.props;
    const { type } = this.state;

    const { h, s, l } = RGBtoHSL(r, g, b);

    switch (type) {
      case "hex":
        return (
          <div>
            <HexColorEditor
              autoFocus={true}
              value={format({ r, g, b, a }, "hex")}
              onChange={onChange}
            />
          </div>
        );
      case "rgb":
        return (
          <div>
            <RGBColorEditor
              autoFocus={true}
              value={format({ r, g, b, a }, "rgb")}
              onChange={onChange}
            />
          </div>
        );
      case "hsl":
        return (
          <div>
            <HSLColorEditor
              autoFocus={true}
              value={format({ h, s, l, a }, "hsl")}
              onChange={onChange}
            />
          </div>
        );
    }

    return undefined;
  }

  template() {
    const { type } = this.state;
    const input = this.makeTypedColorInput();

    return (
      <div class="color-input">
        <OptionMenu
          autoPosition={true}
          menuStyle={{
            width: 80,
            itemPadding: "10px",
          }}
          items={COLOR_TYPES.map((it) => {
            return {
              title: it.toUpperCase(),
              selectable: true,
              closable: true,
              selected: type === it,
              onClick: () => {
                this.setState({
                  type: it,
                });
              },
            };
          })}
        >
          {type.toUpperCase()}
        </OptionMenu>
        {input}
      </div>
    );
  }
}
