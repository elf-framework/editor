import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Button, Menu, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        overflow: "auto",
        backgroundColor: "var(--color-gray-0)",
        padding: 60,
        paddingBottom: 0,
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            position: "relative",
            alignItems: "start",
            gap: 10,
            padding: 50,
            height: 300,
            overflow: "hidden",
          }}
        >
          <Button>
            <SettingsFilled /> Settings
          </Button>
          <Menu
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
                hover: true,
                items: [
                  { type: "item", title: "English", selectable: true },
                  {
                    type: "item",
                    title: "German",
                    selected: true,
                    selectable: true,
                  },
                  { type: "item", title: "French", selectable: true },
                  { type: "item", title: "Spanish", selectable: true },
                  { type: "item", title: "Italian", selectable: true },
                  "-",
                  { type: "item", title: "Portuguese", selectable: true },
                  { type: "item", title: "Russian", selectable: true },
                  { type: "item", title: "Japanese", selectable: true },
                  { type: "item", title: "Chinese", selectable: true },
                ],
              },
            ]}
            style={{
              position: "relative",
            }}
          />
        </div>
      </div>
    </VBox>
  );
}
