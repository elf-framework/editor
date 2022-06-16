import { start } from "@elf/sapa";
import { Button, Menu } from "@elf/ui";
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
            selectable: true,
            onClick: (e, item) => {
              console.log(item.selected);
            },
          },
          {
            type: "custom",
            render: () => {
              return <div style={{
                height: 100,
                width: "100%",
                display: "flex",
                columnGap: "10px",
                padding: "2px 0px",
              }}>
                <Button type="primary" style={{flex: "1 1 auto"}} onClick={() => console.log("button1")}>Hello</Button>
                <Button type="secondary" style={{flex: "1 1 auto"}}>Hello</Button>
              </div>;
            }
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
