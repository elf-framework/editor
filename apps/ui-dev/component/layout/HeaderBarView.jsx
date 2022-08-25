import { Grid, Tools } from "@elf-framework/ui";

import "./HeaderBarView.scss";
export function HeaderBarView() {
  return (
    <div>
      <div class="header-bar-view" style={{ height: 300, marginBottom: 50 }}>
        <div class="frame">
          <div class="header-bar"></div>
        </div>
      </div>

      <Grid columns={[1, 1]} gap={20} class="column-view">
        <div>
          <div class="header-bar-view" style={{ height: 300 }}>
            <div
              class="frame"
              style={{ transform: "translateX(100px) translateY(50px);" }}
            >
              <div class="header-bar"></div>
            </div>
          </div>
        </div>
        <div>
          <div class="description">
            <strong>Application Mode</strong>
            <p>
              Applications can have several modes when necessary (e.g., Design,
              Prototype, Share). Each mode represents a specific workflow, and
              switching between modes changes the entire interface.
            </p>
            <p>
              By enclosing the entire set of features into several modes, the
              interface remains simple and optimized. Because modes affect the
              entire application, they are located on the left side of the
              header bar. The order in which the modes are displayed should
              reflect the order in which users should use them.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div class="header-bar-view" style={{ height: 300 }}>
              <div
                class="frame"
                style={{ transform: "translateX(-100px) translateY(50px);" }}
              >
                <div class="header-bar" style={{ justifyContent: "end" }}>
                  <Tools
                    items={[
                      { type: "button", title: "Button" },
                      { type: "button", title: "Button 2" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="description">
            <strong>Global Actions</strong>
            <p>
              Actions that are global to the application (e.g., sharing,
              syncing, undoing) are located on the right side of the header bar.
              This is a prominent place for actions that is clearly visible and
              easy to access at all times. A small vertical divider can be used
              to divide and organize groups of actions related to one another.
            </p>
          </div>
        </div>
      </Grid>
    </div>
  );
}
