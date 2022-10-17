import HelpOutlineOutlined from "@elf-framework/icon/HelpOutlineOutlined";
import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Button, Grid, Panel, Popover, VBox } from "@elf-framework/ui";

export function PlacementView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "40px 40px",
          height: 700,
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
          <div style={{ textAlign: "left", height: 200 }}>
            <em style={{ marginBottom: 10 }}>Placement: top</em>
            <div
              style={{
                paddingTop: 180,
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
          </div>

          <div style={{ textAlign: "left", height: 200 }}>
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
      <div>
        <p>
          A popover is positioned in relation to its source. The placement
          property values are the following:
          <ul>
            <li>top</li>
            <li>top-left</li>
            <li>top-right</li>
            <li>bottom</li>
            <li>bottom-left</li>
            <li>bottom-right</li>
            <li>left</li>
            <li>left-top</li>
            <li>left-bottom</li>
            <li>right</li>
            <li>right-top</li>
            <li>right-bottom</li>
          </ul>
          . The default placement value is at the top.
        </p>
      </div>
    </Grid>
  );
}
