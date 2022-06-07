import { start } from "@elf/sapa";
import { Menu } from "@elf/ui";
import "@elf/ui/style.css";

start(function () {
  return (
    <div>
      <Menu
        items={[
          {
            type: "item",
            title: "Hello",
            shortcut: "⌃⌥⇧⌘A",
            onSelect: (e, item) => {
              console.log(item.selected);
            },
          },
          {
            type: "divider",
            dashed: true,
          },
          { type: "group", title: "Group" },
          { type: "item", title: "Menu Item", shortcut: "⌃⌥⇧⌘A" },
          { type: "divider" },
          { type: "group", title: "Section Title" },
          {
            type: "item",
            title: "Menu Item",
            icon: "&gt;",
            items: [
              { type: "item", title: "Hello", shortcut: "⌃⌥⇧⌘A" },
              {
                type: "divider",
                dashed: true,
              },
              { type: "group", title: "Group" },
              { type: "item", title: "Menu Item", shortcut: "⌃⌥⇧⌘A" },
            ],
          },
        ]}
        style={{
          width: "300px",
        }}
      />
    </div>
  );
});
