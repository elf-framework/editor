import { format, parse } from "@elf-framework/color";
import { Grid, VBox } from "@elf-framework/ui";

import { CopyText } from "../CopyText";

export function ColorDetailView({ color, title, message, description = "" }) {
  const rgb = parse(color);

  return (
    <VBox>
      <div
        style={{
          flex: "none",
          backgroundColor: color,
          border: "1px solid rgba(255, 255, 255, 0.5)",
          height: "100px",
        }}
      >
        &nbsp;
      </div>
      <div style={{ paddingTop: 10 }}>
        <div>
          <strong>{title}</strong>, {message}
        </div>
        <Grid columns={[1, 1]} gap={10} style={{ paddingTop: 10 }}>
          <div>
            <strong>RGB</strong>
            <div>
              <CopyText text={format(rgb, "rgb")} />
            </div>
          </div>
          <div>
            <strong>HEX</strong>
            <div>
              <CopyText text={format(rgb, "hex").toUpperCase()} />
            </div>
          </div>
        </Grid>
      </div>
      {description}
    </VBox>
  );
}
