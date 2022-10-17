import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Button, Grid, Menu, Popover, VBox } from "@elf-framework/ui";

export function ShowTipView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 40px",
          height: 560,
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div style={{ position: "relative", height: 270 }}>
            <div>
              <em>Show tip: no</em>
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
              placement="bottom"
            >
              <Button selected={true} style={{ visibility: "hidden" }}>
                <SettingsFilled /> Settings
              </Button>
            </Popover>
          </div>

          <div style={{ position: "relative" }}>
            <div>
              <em>Show tip: yes</em>
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
              showTip
              placement="bottom"
            >
              <Button selected={true} style={{ visibility: "hidden" }}>
                <SettingsFilled /> Settings
              </Button>
            </Popover>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          By default, popovers do not have a tip. Popovers without a tip should
          be used when the source has a visually distinct down state, in order
          to show the connection between the popover and its source.
        </p>
        <p>
          Popovers can have a tip. A tip should be used to help show the
          connection to its source, in cases where the source does not have a
          visually distinct down state.
        </p>
      </div>
    </Grid>
  );
}
