import { Grid } from "@elf-framework/ui";

import "./StrongView.scss";

export function StrongView() {
  return (
    <div class="strong-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Strong</strong>
          <div style={{ padding: 10 }}>
            Strong can be used for placing importance on part of a sentence,
            rendering the text as a heavier font weight. This is for semantic
            formatting, when it’s intended to add a tone that conveys
            importance.
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
            <div>
              <div>This is a strong text.</div>
              <strong>This is a strong text.</strong>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}
