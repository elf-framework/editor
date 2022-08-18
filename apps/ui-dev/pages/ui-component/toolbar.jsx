import AddChartFilled from "@elf-framework/icon/esm/AddChartFilled";
import { start } from "@elf-framework/sapa";
import { Toolbar } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../layouts/UILayout";

start(function () {
  const item = {
    items: [
      {
        type: "item",
        icon: <AddChartFilled />,
        selected: () => this.state.selectedItem === "artboard",
        events: ["refreshIcon"],
        onClick: () => {
          this.setState(
            {
              selectedItem:
                this.state.selectedItem !== "artboard" ? "artboard" : "",
            },
            false
          );

          this.emit("refreshIcon");
        },
      },
      {
        type: "custom",
        render: () => {
          return (
            <div
              onClick={() => {
                console.log("custom");
              }}
            >
              fdsafdsafdsf
            </div>
          );
        },
      },
      {
        type: "item",
        title: "Menu Item",
        selected: () => this.state.selectedItem === "menu",
        events: ["refreshIcon"],
        onClick: () => {
          this.setState(
            {
              selectedItem: this.state.selectedItem !== "menu" ? "menu" : "",
            },
            false
          );

          this.emit("refreshIcon");
        },
      },
      {
        type: "menu",
        icon: <AddChartFilled />,
        selected: () => this.state.selectedItem === "dropdown",
        events: ["refreshIcon"],
        direction: "left",
        arrow: true,
        trigger: "hover",
        onOpen: () => {
          console.log("foo");
        },
        items: [
          {
            title: "Hello",
            shortcut: "⌃⌥⇧⌘A",
            selectable: true,
            onClick: (e, item) => {
              console.log(item.selected);
            },
          },
        ],
      },
      {
        type: "menu",
        icon: <AddChartFilled />,
        selected: () => this.state.selectedItem === "dropdown",
        events: ["refreshIcon"],
        direction: "right",
        onOpen: () => {
          console.log("foo");
        },
        items: [
          {
            title: "Hello",
            shortcut: "⌃⌥⇧⌘A",
            selectable: true,
            disabled: true,
            onClick: (e, item) => {
              console.log(item.selected);
            },
          },
        ],
      },
      {
        type: "menu",
        icon: <AddChartFilled />,
        selected: () => this.state.selectedItem === "dropdown",
        events: ["refreshIcon"],
        direction: "center",
        onOpen: () => {
          console.log("foo");
        },
        items: [
          {
            title: "Hello",
            shortcut: "⌃⌥⇧⌘A",
            selectable: true,
            onClick: (e, item) => {
              console.log(item.selected);
            },
          },
          "-",
          {
            type: "group",
            title: "Group",
          },
          {
            title: "Hello",
            shortcut: "⌃⌥⇧⌘A",
            onClick: (e, item) => {
              console.log(item);
            },
          },
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
              {
                type: "item",
                closable: true,
                title: "Hello",
                shortcut: "⌃⌥⇧⌘A",
              },
              {
                type: "divider",
                dashed: true,
              },
              { type: "group", title: "Group" },
              { type: "item", title: "Menu Item", shortcut: "⌃⌥⇧⌘A" },
            ],
          },
        ],
        onClick: () => {
          this.setState(
            {
              selectedItem:
                this.state.selectedItem !== "dropdown" ? "dropdown" : "",
            },
            false
          );

          this.emit("refreshIcon");
        },
      },
    ],
  };

  return (
    <UILayout>
      <div>
        <Toolbar items={[item]} />
      </div>
    </UILayout>
  );
});
