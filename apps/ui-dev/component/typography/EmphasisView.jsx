import { Grid } from "@elf-framework/ui";

import "./EmphasisView.scss";

export function EmphasisView() {
  return (
    <div class="emphasis-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Emphasis</strong>
          <div style={{ padding: 10 }}>
            Emphasis can be used for placing emphasis on part of a sentence,
            rendering the text as italic.
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
              I am <em>emphasized</em>.
            </label>
          </div>
        </div>
      </Grid>
    </div>
  );
}
