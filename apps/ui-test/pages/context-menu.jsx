import { start } from "@elf/sapa";
import { Menu } from "@elf/ui";
import "@elf/ui/style.css";

start(function () {
  console.log(this.state.e);
  return (
    <div>
      <div
        style={{
          "user-select": "none",
        }}
        onContextMenu={(e) => {
          e.preventDefault();

          this.setState({
            e,
          });
        }}
      >
        Context Menu, Click right button.
      </div>
      {this.state.e ? (
        <Menu
          type="contextmenu"
          x={this.state.e.clientX}
          y={this.state.e.clientY}
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
          style={{
            width: "300px",
          }}
        />
      ) : undefined}
    </div>
  );
});
