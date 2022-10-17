import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Button, Grid, Tooltip, VBox } from "@elf-framework/ui";

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
          <div style={{ textAlign: "center" }}>
            <em style={{ marginBottom: 10 }}>Placement : top (default)</em>
            <div style={{ paddingTop: 100 }}>
              <Tooltip
                show
                message={
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    Your admin must grant you permission to create segments
                  </div>
                }
                style={{
                  maxWidth: 200,
                }}
                placement="top" // default
              >
                <Button quiet iconOnly size="extra-small" selected>
                  <InfoOutlined />
                </Button>
              </Tooltip>
            </div>
          </div>
          <div style={{ textAlign: "left", height: 200 }}>
            <em style={{ marginBottom: 10 }}>Placement: bottom-right</em>
            <div
              style={{
                paddingTop: 40,
                paddingLeft: 120,
              }}
            >
              <Tooltip
                show
                message={
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    Your admin must grant you permission to create segments
                  </div>
                }
                style={{
                  maxWidth: 200,
                }}
                placement="bottom-right" // default
              >
                <Button quiet iconOnly size="extra-small" selected>
                  <InfoOutlined />
                </Button>
              </Tooltip>
            </div>
          </div>

          <div style={{ textAlign: "center", height: 200 }}>
            <em style={{ marginBottom: 10 }}>Placement: bottom</em>
            <div
              style={{
                paddingTop: 20,
              }}
            >
              <Tooltip
                show
                message={
                  <div style={{ whiteSpace: "pre-wrap" }}>
                    Your admin must grant you permission to create segments
                  </div>
                }
                style={{
                  maxWidth: 200,
                }}
                placement="bottom" // default
              >
                <Button quiet iconOnly size="extra-small" selected>
                  <InfoOutlined />
                </Button>
              </Tooltip>
            </div>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          A tooltip is positioned in relation to its target. Placement property
          values are at the:
          <ul>
            <li>top</li>
            <li>top-left</li>
            <li>top-right</li>
            <li>bottom</li>
            <li>bottom-left</li>
            <li>bottom-right</li>
            <li>left</li>
            <li>right</li>
          </ul>
          . The default placement value is at the top.
        </p>
      </div>
    </Grid>
  );
}
