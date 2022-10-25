import { format, parse, RGBtoHSL } from "@elf-framework/color";
import { useComponentRender } from "@elf-framework/sapa";
import { Grid } from "@elf-framework/ui";

import { getThemeTokens } from "../../utils/theme";
import { ucwords } from "../../utils/ucwords";
import { CopyText } from "../CopyText";
import { ContrastView } from "./ContrastView";
import "./PaletteView.scss";

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
      ].map((color) => {
        const colors = tokens.color[color];
        const list = convertToKeyValue(colors);
        return (
          <div>
            <h2>{ucwords(color)}</h2>
            <div
              style={{
                display: "flex",
                gap: 20,
                marginBottom: 20,
                justifyContent: "space-between",
              }}
            >
              {list.map((it) => {
                return (
                  <div
                    style={{ width: 50, height: 50, backgroundColor: it.color }}
                  ></div>
                );
              })}
            </div>
            <div
              style={{
                display: "grid",
                gap: 10,
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              {list.map((it) => {
                const selectedColorObject = parse(it.color);
                const hsl = RGBtoHSL(
                  selectedColorObject.r,
                  selectedColorObject.g,
                  selectedColorObject.b
                );

                return (
                  <div
                    style={{
                      overflow: "hidden",
                      border: "1px solid var(--color-border)",
                      borderRadius: 4,
                    }}
                  >
                    <div
                      class="check-contrast"
                      style={{ height: 120, backgroundColor: it.color }}
                    >
                      <ContrastView color={it.color} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        padding: 10,
                      }}
                    >
                      <div>
                        {ucwords(color)} {ucwords(it.index)}
                      </div>
                      <div>
                        <CopyText text={it.color} />
                      </div>
                      <div>
                        <CopyText text={format(selectedColorObject, "rgb")} />
                      </div>
                      <div>
                        <CopyText text={format(hsl, "hsl")} />
                      </div>
                      <div>
                        <CopyText text={`--color-${color}-${it.index}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Grid>
  );
}
