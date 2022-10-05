import AddChartFilled from "@elf-framework/icon/AddChartFilled";
import { start } from "@elf-framework/sapa";
import { Tools } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../layouts/UILayout";

start(function () {
  return (
    <UILayout>
      <div>
        <Tools
          items={[
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
                    selectedItem:
                      this.state.selectedItem !== "menu" ? "menu" : "",
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
              right: true,
              onOpen: () => {
                console.log("foo");
              },
              items: [
                // 함수로 커스텀 렌더 정의
                ({ rootClose }) => (
                  <div
                    onClick={() => {
                      rootClose();
                    }}
                  >
                    Hello
                  </div>
                ),
                // 커스텀 타입 메뉴 아이템 정의
                {
                  type: "custom",
                  render: ({ rootClose }) => {
                    return (
                      <div
                        onClick={() => {
                          rootClose();
                        }}
                      >
                        Hello
                      </div>
                    );
                  },
                },
                // divider 정의
                "-",
                // group 타입 메뉴 아이템 정의
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
                // 기본 메뉴 아이템 정의
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
          ]}
        />
      </div>
    </UILayout>
  );
});
