import EditFilled from "@elf-framework/icon/EditFilled";
import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Button, Flex, Menu, Popover, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        overflow: "auto",
        backgroundColor: "var(--color-gray-0)",
        padding: 20,
      }}
    >
      <Flex>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            alignItems: "start",
            gap: 10,
            padding: 50,
            height: 300,
            overflow: "hidden",
          }}
        >
          <div>
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
              showTip
              placement="bottom-left"
            >
              <Button>
                <SettingsFilled /> Settings
              </Button>
            </Popover>
          </div>
        </div>
        <Flex style={{ justifyContent: "flex-start", alignItems: " center" }}>
          <div>
            <Popover
              body={
                <Menu
                  type="dropdown"
                  style={{ position: "relative" }}
                  items={[
                    {
                      type: "item",
                      title: "Document Setup",
                      selected: true,
                      selectable: true,
                    },
                    { type: "item", title: "Document Setup" },
                  ]}
                />
              }
              show
              animated
              hideArrow={false}
              placement="top"
            >
              <Button>
                <EditFilled /> Edit
              </Button>
            </Popover>
          </div>
        </Flex>
      </Flex>
    </VBox>
  );
}
