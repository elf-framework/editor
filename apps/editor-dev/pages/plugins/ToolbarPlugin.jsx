import DarkModeFilled from "@elf-framework/icon/DarkModeFilled";
import LightModeFilled from "@elf-framework/icon/LightModeFilled";
import PolylineFilled from "@elf-framework/icon/PolylineFilled";
import { useComponentRender } from "@elf-framework/sapa";
import { ActionGroup, Button, Toolbar } from "@elf-framework/ui";

export function ToolbarPlugin(editor) {
  const leftMenu = {
    items: [
      {
        type: "item",
        // title: editor.i18n.get("app.title"),
        icon: <PolylineFilled />,
        selectable: true,
        selected: true,
      },
      {
        type: "menu",
        title: () => "3D ",
        trigger: "hover",
        items: [
          { title: <span>texture</span> },
          {
            type: "item",
            selectable: true,
            selected: () => true,
            title: "3D mesh",
          },
          {
            type: "item",
            selectable: false,
            selected: true,
            title: "sample title",
          },
        ],
      },
      {
        type: "menu",
        title: "fdsafd",
        events: ["selectedItem", "selectionMode"],
        direction: "left",
        arrow: true,
        trigger: "hover",
        // opened: true,
        onClick: () => {
          if (editor.$store.is("selectionMode", "shape")) {
            editor.$store.set(
              "selectedItem",
              editor.$store.get("selectedItem", "box")
            );
          } else {
            editor.$store.set(
              "selectedItem",
              editor.$store.get("selectedItem", "box")
            );
            editor.$store.set("selectionMode", "shape");
          }
        },
        onOpen: () => {
          console.log("foo");
        },
        items: [
          { type: "group", title: "3D" },
          { type: "item", title: "yellow" },
          "-",
          { type: "group", title: "2D" },
          { type: "item", title: "yellow2" },
        ],
      },
    ],
  };

  function CustomMenuItem() {
    useComponentRender("config:editor.layout.show.left");
    useComponentRender("config:editor.layout.show.right");

    const isShowLeft = editor.configs.get("editor.layout.show.left");
    const isShowRight = editor.configs.get("editor.layout.show.right");

    return (
      <ActionGroup compact>
        <Button
          size="small"
          variant={isShowLeft ? "primary" : "default"}
          iconOnly
          selected={isShowLeft}
          onClick={() => {
            editor.commands.execute("editor.layout.toggle.left");
          }}
        >
          L
        </Button>
        <Button
          size="small"
          variant={isShowRight ? "primary" : "default"}
          iconOnly
          selected={isShowRight}
          onClick={() => {
            editor.commands.execute("editor.layout.toggle.right");
          }}
        >
          R
        </Button>
      </ActionGroup>
    );
  }

  const centerMenu = {
    items: [
      {
        type: "item",
        title: "hoverable false tools item",
        hoverable: false,
      },
      {
        type: "custom",
        hoverable: false,
        render: () => {
          return <CustomMenuItem />;
        },
      },
    ],
  };

  const rightMenu = {
    items: [
      {
        type: "item",
        icon: () => {
          const theme = editor.configs.get("editor.theme");

          return theme === "light" ? <DarkModeFilled /> : <LightModeFilled />;
        },
        onClick: () => {
          editor.commands.execute("toggle.theme");
        },
        events: ["config:editor.theme"],
      },
    ],
  };

  editor.registerUI({
    Toolbar: [
      Toolbar,
      {
        items: [leftMenu, centerMenu, rightMenu],
        style: {
          height: 40,
        },
      },
    ],
  });
}
