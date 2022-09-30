import { Grid } from "@elf-framework/ui";

import "./UnderlineView.scss";

export function UnderlineView() {
  return (
    <div class="underline-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Underline</strong>
          <div style={{ padding: 10 }}>
            Underline is used only for text links and should never be used as a
            mechanism for adding emphasis.
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
              See <a href="#">this link</a> for more information.
            </label>
          </div>
        </div>
      </Grid>
    </div>
  );
}
