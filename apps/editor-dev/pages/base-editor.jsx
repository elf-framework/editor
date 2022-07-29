import {
  BaseEditor,
  useCommand,
  useSetConfig,
} from "@elf-framework/base-editor";
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
        plugins={[
          ToolbarPlugin,
          RightPlugin,
          LeftPlugin,
          RenderPlugin,
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
          },

          function (editor) {
            editor.registerUI({
              view: () => {
                return (
                  <button
                    type="button"
                    onClick={async () => {
                      const ret = await useCommand("my-command");

                      console.log("return", ret);

                      useSetConfig("yellow", "red" + Math.random());
                    }}
                  >
                    Sample
                  </button>
                );
              },
            });
          },
        ]}
      ></BaseEditor>
    </div>
  );
});
