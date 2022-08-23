import tokens from "@elf-framework/design-tokens/tokens.json";
import { Grid, VBox } from "@elf-framework/ui";

import { ColorView } from "./ColorView";
export function MainColorView() {
  return (
    <Grid columns={3} gap={20}>
      {Object.keys(tokens.color.core).map((color) => {
        if (color === "white" || color === "black") {
          return (
            <VBox>
              <ColorView
                color={tokens.color.core[color]}
                text={`color.core.${color}`}
              />
            </VBox>
          );
        }

        const mainColor = tokens.color.core[color];

        return (
          <VBox>
            <h3>{color}</h3>
            {Object.entries(mainColor).map(([key, value]) => {
              return (
                <ColorView color={value} text={`color.core.${color}.${key}`} />
              );
            })}
          </VBox>
        );
      })}
    </Grid>
  );
}
