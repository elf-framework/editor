import HelpOutlineOutlined from "@elf-framework/icon/HelpOutlineOutlined";
import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Button, Grid, Panel, Popover, VBox } from "@elf-framework/ui";

export function PlacementView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
        height: 900,
      }}
    >
      <Grid rows={2} style={{ gap: 30 }}>
        <div style={{ textAlign: "left" }}>
          <em style={{ marginBottom: 10 }}>
            Placement : bottom-left (default)
          </em>
          <div style={{ paddingTop: 20 }}>
            <Popover
              show
              body={
                <Panel title={"Permission required"}>
                  <p>
                    Your admin must grant you permission to create segments.
                  </p>
                  <a href="#">Learn about permissions</a>
                </Panel>
              }
              placement="bottom-left" // default
            >
              <Button iconOnly quiet size="extra-small" selected>
                <InfoOutlined />
              </Button>
            </Popover>
          </div>
        </div>
        <div style={{ textAlign: "center", height: 200 }}>
          <div
            style={{
              paddingTop: 240,
              paddingLeft: 120,
            }}
          >
            <Popover
              show
              body={
                <Panel title={"Permission required"}>
                  <p>
                    Your admin must grant you permission to create segments.
                  </p>
                  <a href="#">Learn about permissions</a>
                </Panel>
              }
              placement="top"
            >
              <Button iconOnly quiet size="extra-small" selected>
                <HelpOutlineOutlined />
              </Button>
            </Popover>
          </div>
          <em style={{ marginBottom: 10 }}>Placement: top</em>
        </div>

        <div style={{ textAlign: "left", height: 200, marginTop: 100 }}>
          <em style={{ marginBottom: 10 }}>Placement: right-bottom</em>
          <div
            style={{
              paddingTop: 20,
            }}
          >
            <Popover
              show
              body={
                <Panel title={"Permission required"}>
                  <p>
                    Your admin must grant you permission to create segments.
                  </p>
                  <a href="#">Learn about permissions</a>
                </Panel>
              }
              placement="right-bottom"
            >
              <Button iconOnly quiet size="extra-small" selected>
                <HelpOutlineOutlined />
              </Button>
            </Popover>
          </div>
        </div>
      </Grid>
    </VBox>
  );
}
