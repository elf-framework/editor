import { useComponentRender } from "@elf-framework/sapa";
import { Grid } from "@elf-framework/ui";

import { getThemeTokens } from "../../utils/theme";
import { ucwords } from "../../utils/ucwords";
import { ColorPalette } from "./ColorPalette";

function convertToKeyValue(obj) {
  return Object.entries(obj).map(([index, color]) => {
    return { index, color };
  });
}

export function PaletteView() {
  useComponentRender("view-mode");

  const tokens = getThemeTokens();

  return (
    <Grid
      columns={1}
      gap={20}
      style={{
        padding: 20,
      }}
    >
      {[
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "gray",
        "teal",
      ].map((color) => (
        <ColorPalette
          title={ucwords(color)}
          colors={convertToKeyValue(tokens.color[color])}
        />
      ))}
    </Grid>
  );
}
