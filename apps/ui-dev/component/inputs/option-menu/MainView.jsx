import AddChartFilled from "@elf-framework/icon/AddChartFilled";
import { ColorMixer, OptionMenu, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
        position: "relative",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <OptionMenu
          icon={<AddChartFilled />}
          style={{ width: 200 }}
          items={[
            {
              type: "item",
              title: "Hello",
              shortcut: "⌃⌥⇧⌘A",
              onClick: (e, item) => {
                console.log(item.selected);
              },
            },
            {
              type: "divider",
              dashed: true,
            },
            { type: "group", title: "Group" },
            {
              type: "item",
              title: "Menu Item",
              shortcut: "⌃⌥⇧⌘A",
            },
            { type: "divider" },
            { type: "group", title: "Section Title" },
            {
              type: "item",
              title: "Menu Item",
              items: [
                { type: "item", title: "Hello", shortcut: "⌃⌥⇧⌘A" },
                {
                  type: "divider",
                  dashed: true,
                },
                { type: "group", title: "Group" },
                {
                  type: "item",
                  title: "Menu Item",
                  shortcut: "⌃⌥⇧⌘A",
                  onClick: (e, item) => {
                    console.log(e, item);
                  },
                },
              ],
            },
          ]}
        >
          text
        </OptionMenu>
      </div>
    </VBox>
  );
}
