import { Grid } from "@elf-framework/ui";

import "./ItalicView.scss";

export function ItalicView() {
  return (
    <div class="italic-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Italic</strong>
          <div style={{ padding: 10 }}>
            Italic is used only for placeholder (“ghost”) text and image
            captions.
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "var(--color-gray-0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 150,
            }}
          >
            <label>
              <div style={{ fontSize: 12 }}>Email Address</div>
              <input type="text" placeholder="abc@elf-framework.com" />
            </label>
          </div>
        </div>
      </Grid>
    </div>
  );
}
