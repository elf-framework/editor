import { Grid, Tools } from "@elf-framework/ui";

import "./SideBarView.scss";
export function SideBarView() {
  return (
    <div>
      <div class="header-bar-view" style={{ height: 300, marginBottom: 50 }}>
        <div class="frame">
          <div class="header-bar"></div>
          <div class="side-bar"></div>
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
              <div class="side-bar">
                <Tools
                  vertical={true}
                  items={[
                    { type: "button", title: "B", selected: true },
                    { type: "button", title: "B2" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="description">
            <strong>Tools</strong>
            <p>
              Similar to modes, tools can affect the entire application. Because
              of that, they are always located at the top of the left sidebar,
              next to application modes (when present). The default tool should
              be at the top.
            </p>
          </div>
        </div>

        <div>
          <div>
            <div class="header-bar-view" style={{ height: 300 }}>
              <div
                class="frame"
                style={{ transform: "translateX(100px) translateY(-50px);" }}
              >
                <div class="header-bar" style={{ justifyContent: "end" }}></div>
                <div class="side-bar">
                  <div class="side-bar-item"></div>
                  <div class="side-bar-item">
                    <Tools
                      vertical={true}
                      items={[
                        {
                          type: "button",
                          title: "B",
                          selected: true,
                          selectedType: "secondary",
                        },
                        {
                          type: "button",
                          title: "B2",
                          selectedType: "secondary",
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="description">
            <strong>Actions</strong>
            <p>
              Actions buttons can be located anywhere on the sidebar(s). They
              are versatile and can be used in multiple ways depending on the
              needs of the application: they might open panels, popovers, and
              trays; or display on canvas controls.
            </p>
          </div>
        </div>
      </Grid>
    </div>
  );
}
