import DarkModeFilled from "@elf-framework/icon/DarkModeFilled";
import LightModeFilled from "@elf-framework/icon/LightModeFilled";
import { Toolbar } from "@elf-framework/ui";

export function ToolbarPlugin(editor) {
  const leftMenu = {
    items: [
      {
        type: "item",
        title: editor.i18n.get("app.title"),
      },
      {
        type: "menu",
        title: () => "3D ",
        trigger: "hover",
        items: [
          { title: () => "texture" },
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
        items: [leftMenu, rightMenu],
        style: {
          height: 40,
        },
      },
    ],
  });
}
