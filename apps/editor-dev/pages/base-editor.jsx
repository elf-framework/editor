import { BaseEditor } from "@elf-framework/base-editor";
import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { CenterPlugin } from "./plugins/CenterPlugin";
import { LeftPlugin } from "./plugins/LeftPlugin";
import { RenderPlugin } from "./plugins/RenderPlugin";
import { RightPlugin } from "./plugins/RightPlugin";
import { ToolbarPlugin } from "./plugins/ToolbarPlugin";

start(function () {
  return (
    <div>
      <BaseEditor
        configs={{
          key: "value",
        }}
        plugins={[
          ToolbarPlugin,
          RightPlugin,
          LeftPlugin,
          CenterPlugin,

          async function (editor) {
            editor.registerConfig({
              key: "yellow",
              defaultValue: "yellow",
              title: "Yellow Title",
              description: "Description Yellow",
              type: "string",
            });

            editor.registerCommand({
              command: "my-command",
              title: "My Command",
              execute: async () => {
                return 10;
              },
            });

            console.log(editor.configs.get("yellow"));

            
          },

          RenderPlugin,
        ]}
      ></BaseEditor>
    </div>
  );
});
