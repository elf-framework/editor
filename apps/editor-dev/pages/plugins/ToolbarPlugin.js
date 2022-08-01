import { Toolbar } from "@elf-framework/ui";

export function ToolbarPlugin(editor) {
  const item = {
    items: [
      {
        type: "item",
        title: "3D",
      },
      {
        type: "menu",
        title: () => "3D fdsafjkdlsafjdkslfjdksl",
        trigger: "hover",
        items: [
          { title: () => "3D fdsafjkdlsafjdkslfjdksl" },
          { type: "item", title: "3D fdsafjkdlsafjdkslfjdksl" },
          { type: "item", title: "3D fdsafjkdlsafjdkslfjdksl" },
        ],
      },
      {
        type: "menu",
        title: "fdsafd",
        selected: () => {
          return true;
        },
        events: ["selectedItem", "selectionMode"],
        direction: "left",
        arrow: true,
        trigger: "hover",
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

  editor.registerUI({
    Toolbar: [Toolbar, { items: [item] }],
  });
}
