import tokens from "@elf-framework/design-tokens/tokens.json";
import { Grid } from "@elf-framework/ui";

import { ucwords } from "../../utils/ucwords";
import { ColorPalette } from "./ColorPalette";

function convertToKeyValue(obj) {
  return Object.entries(obj).map(([index, color]) => {
    return { index, color };
  });
}

export function PaletteView() {
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
