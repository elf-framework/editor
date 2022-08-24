import tokens from "@elf-framework/design-tokens/tokens.json";
import { Grid } from "@elf-framework/ui";

import { ColorStatus } from "./ColorStatus";

export function ColorStatusList() {
  return (
    <Grid columns={3} gap={20}>
      <ColorStatus
        title="Background"
        colors={tokens.color.background}
        cssKey="--color-background"
        renderView={(color) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: color,
                  borderRadius: 2,
                  boxSizing: "border-box",
                }}
              ></div>
            </div>
          );
        }}
      />
      <ColorStatus
        title="Border"
        colors={tokens.color.border}
        cssKey="--color-border"
        renderView={(color) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  border: `2px solid ${color}`,
                  boxSizing: "border-box",
                }}
              ></div>
            </div>
          );
        }}
      />
      <ColorStatus
        title="Font & Text"
        colors={tokens.color.text}
        cssKey="--color-text"
        renderView={(color) => {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  color,
                  fontSize: "3rem",
                  fontWeight: 900,
                  fontFamily: "sans-serif",
                }}
              >
                A
              </div>
            </div>
          );
        }}
      />
    </Grid>
  );
}
