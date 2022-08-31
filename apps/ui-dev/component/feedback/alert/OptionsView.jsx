import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Button, Grid, Menu, Popover, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 40px",
          height: 280,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
          }}
        >
          <div style={{ position: "relative" }}>
            <Popover
              body={
                <Menu
                  type="dropdown"
                  items={[
                    { type: "item", title: "Document Setup" },
                    { type: "item", title: "Settings" },
                    { type: "item", title: "Copy" },
                    {
                      type: "section",
                      title: "Group",
                    },
                    {
                      type: "item",
                      title: "Languages",
                    },
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
              <Button selected={true} style={{ display: "none" }}>
                <SettingsFilled /> Settings
              </Button>
            </Popover>
            <div
              style={{
                position: "absolute",
                width: 200,
                height: 10,
                top: 10,
                backgroundColor: "#e9cdef",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: 10,
                height: 225,
                top: 30,
                left: 210,
                backgroundColor: "#e9cdef",
              }}
            ></div>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          A popover’s width and height can be customized appropriately for its
          context.
        </p>
      </div>
    </Grid>
  );
}
