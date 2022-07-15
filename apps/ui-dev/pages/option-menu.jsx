import AddChartFilled from "@elf-framework/icon/esm/AddChartFilled";
import { start } from "@elf-framework/sapa";
import { OptionMenu, VBox } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

start(function () {
  return (
    <div>
      <VBox>
        <h1>Option Menu</h1>
        <div
          style={{
            width: 200,
          }}
        >
          <OptionMenu
            icon={<AddChartFilled />}
            items={[
              {
                type: "item",
                title: "Hello",
                shortcut: "⌃⌥⇧⌘A",
                selectable: true,
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
                selectable: true,
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
      <VBox>
        <h1>Option Menu - Disabled</h1>
        <div
          style={{
            width: 200,
          }}
        >
          <OptionMenu
            disabled={true}
            icon={<AddChartFilled />}
            items={[
              {
                type: "item",
                title: "Hello",
                shortcut: "⌃⌥⇧⌘A",
                selectable: true,
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
                selectable: true,
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
    </div>
  );
});
