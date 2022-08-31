import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Button, Grid, Menu, Popover, VBox } from "@elf-framework/ui";

export function PlacementView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 40px",
          height: 560,
        }}
      >
        <div>
          <div style={{ position: "relative", height: 270 }}>
            <div>
              <em>bottom-left</em>
            </div>
            <Popover
              body={
                <Menu
                  type="dropdown"
                  items={[
                    { type: "item", title: "Document Setup" },
                    { type: "item", title: "Settings" },
                    { type: "item", title: "Copy" },
                  ]}
                  style={{
                    width: 200,
                    position: "relative",
                    boxShadow: "none",
                  }}
                />
              }
              show={true}
              placement="bottom-left"
            >
              <Button>
                <SettingsFilled /> Settings
              </Button>
            </Popover>
          </div>

          <div style={{ position: "relative", paddingTop: 150 }}>
            <Popover
              body={
                <Menu
                  compact={true}
                  type="dropdown"
                  items={[
                    { type: "item", title: "Document Setup" },
                    { type: "item", title: "Settings" },
                  ]}
                  style={{
                    width: "auto",
                    position: "relative",
                  }}
                />
              }
              trigger="click"
              show={true}
              placement="top-left"
            >
              <Button>
                <SettingsFilled /> Settings
              </Button>
            </Popover>
            <div>
              <em>top-left</em>
            </div>
          </div>
        </div>
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
