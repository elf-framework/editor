import { Grid } from "@elf-framework/ui";

import "./ColumnView.scss";

export function ColumnTypeView() {
  return (
    <Grid columns={[1, 1]} gap={20} class="column-view">
      <div>
        <Grid
          class="fluid"
          columns={12}
          gap={10}
          style={{
            height: 240,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
          <div class="grid-item"></div>
        </Grid>
      </div>
      <div>
        <div class="description">
          <strong>Fluid</strong>
          <p>
            The fluid grid is designed for complex screens and web applications
            as it uses 100% of the screen’s width. The large and high-definition
            fluid grids allow for maximum use of screen real estate, and is best
            used for application workflows and UI.
          </p>
        </div>
      </div>

      <div>
        <div
          style={{
            backgroundColor: "var(--color-green-1)",
          }}
        >
          <Grid
            class="fixed"
            columns={12}
            gap={10}
            style={{
              maxWidth: 260,
              height: 240,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
          </Grid>
        </div>
      </div>

      <div>
        <div class="description">
          <strong>Fixed</strong>
          <p>
            The fixed grid has a maximum width and is designed for simple
            screens and content-specific pages. The width allows for maximum
            readability of page content in large and high-definition screens.
          </p>
        </div>
      </div>
    </Grid>
  );
}
