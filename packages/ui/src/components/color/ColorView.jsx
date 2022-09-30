import { format, parse } from "@elf-framework/color";

import { registerComponent } from "../../utils/component";

export function ColorView({ color }) {
  const parsedColor = parse(color);
  const { r, g, b } = parsedColor;

  return (
    <div class="elf--color-view">
      <div
        class="elf--color-view-color"
        style={{ backgroundColor: format({ r, g, b }, "rgb") }}
      />
      <div class="elf--color-view-opacity-pattern">
        <div
          class="elf--color-view-opacity"
          style={{ backgroundColor: format(parsedColor, "rgb") }}
        />
      </div>
    </div>
  );
}

registerComponent("color-view", ColorView);
registerComponent("ColorView", ColorView);
registerComponent("colorview", ColorView);
