import { Grid } from "@elf-framework/ui";

import "./ColumnView.scss";

export function ColumnView() {
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
        <div class="description">
          <strong>Columns</strong>
          <p>
            By default, 12 columns are used. It can be specified in the form of
            column-xxx depending on the required state.
          </p>
        </div>
      </div>
      <div>
        <Grid
          columns={12}
          gap={8}
          class="gutter"
          style={{
            height: 240,
            paddingLeft: 8,
            paddingRight: 8,
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
        <div class="description">
          <strong>Gaps</strong>

          <p>
            Gaps are the gaps between the columns. Gutter widths are fixed
            values (16 px, 24 px, etc.) based on breakpoints.
          </p>
        </div>
      </div>

      <div>
        <Grid
          class="margin"
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
        <div class="description">
          <strong>Margin</strong>
          <p>
            Grid margins are the outer margins of the grid. They can be the same
            width as the gutters or greater.
          </p>
        </div>
      </div>

      <div>
        <div style={{ position: "relative" }}>
          <Grid
            class="grid-area-margin"
            columns={12}
            gap={10}
            padding={`0px 10px`}
            style={{
              height: 240,
              paddingLeft: 10,
              paddingRight: 10,
              boxSizing: "border-box",
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
          <Grid
            class="grid-area"
            columns={12}
            rows={5}
            gap={10}
            padding={10}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <div
              class="grid-item"
              style={{
                gridColumn: "1 / span 7",
                gridRow: "1 / span 2",
              }}
            ></div>
            <div
              class="grid-item"
              style={{
                gridColumnStart: 7,
                gridColumn: "span 5",
                gridRowStart: 1,
                gridRow: "span 1",
              }}
            ></div>
            <div
              class="grid-item"
              style={{
                gridColumnStart: 7,
                gridColumn: "span 5",
                gridRowStart: 1,
                gridRow: "span 1",
              }}
            ></div>

            <div
              class="grid-item"
              style={{
                gridColumnStart: 1,
                gridColumn: "span 4",
                gridRowStart: 3,
                gridRow: "span 3",
              }}
            ></div>
            <div
              class="grid-item"
              style={{
                gridColumnStart: 1,
                gridColumn: "span 4",
                gridRowStart: 3,
                gridRow: "span 3",
              }}
            ></div>
            <div
              class="grid-item"
              style={{
                gridColumnStart: 1,
                gridColumn: "span 4",
                gridRowStart: 3,
                gridRow: "span 3",
              }}
            ></div>
          </Grid>
        </div>
        <div class="description">
          <strong>Layout</strong>
          <br />
          <p>Grid areas are used to layout elements in a grid.</p>
        </div>
      </div>
    </Grid>
  );
}
