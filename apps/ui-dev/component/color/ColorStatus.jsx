import { Grid } from "@elf-framework/ui";

import { ColorSingleView } from "./ColorSingleView";

export function ColorStatus({
  title,
  colors,
  columns = 1,
  cssKey,
  renderView,
}) {
  return (
    <div>
      <h2>{title} </h2>
      <Grid columns={columns} gap={20}>
        {Object.keys(colors).map((color) => {
          const mainColor = colors[color];

          if (typeof mainColor !== "string") {
            return "";
          }
          return (
            <div
              style={{
                padding: 10,
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              {renderView(mainColor)}
              <ColorSingleView
                color={mainColor}
                text={color}
                css={`var(${cssKey}-${color})`}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          );
        })}
      </Grid>
    </div>
  );
}
