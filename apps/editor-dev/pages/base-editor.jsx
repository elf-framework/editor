import { BaseEditor } from "@elf-framework/base-editor";
import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import locales from "./messages/locales";
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
          function (editorContext) {
            editorContext.registerI18nMessageWithLang(locales);
          },

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

            // 커맨드 동적 등록
            editor.registerCommand({
              command: "my-command",
              title: "My Command",
              description: "My Command Description",
              execute: async () => {
                console.log("sample command");
                console.log(editor.keyboard.event);
                return 10;
              },
            });

            // short 동적 등록
            editor.registerShortcut({
              key: "meta+shift+e",
              mac: "ctrl+shift+e",
              command: (editor, a, b, c) => {
                console.log("sample shortcut", editor, a, b, c);
              },
              args: [1, 2, 3],
            });
          },

          RenderPlugin,
        ]}
      ></BaseEditor>
    </div>
  );
});
