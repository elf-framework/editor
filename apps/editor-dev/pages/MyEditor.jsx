import { BaseEditor } from "@elf-framework/base-editor";
import { useStoreValue } from "@elf-framework/sapa";
import { View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import locales from "./messages/locales";
import { CenterPlugin } from "./plugins/CenterPlugin";
import { LeftPlugin } from "./plugins/LeftPlugin";
import { RenderPlugin } from "./plugins/RenderPlugin";
import { RightPlugin } from "./plugins/RightPlugin";
import { ToolbarPlugin } from "./plugins/ToolbarPlugin";

function C() {
  const [b, setB] = useStoreValue("b", 1);
  return <div>aaa {b}</div>;
}

function B() {
  return <C />;
}

function A() {
  const [b, setB] = useStoreValue("b", 1);
  return <div>A</div>;
}

export function MyEditor() {
  const [a, setA] = useStoreValue("myeditor", 1);

  return (
    // <A />
// 
    <BaseEditor
      configs={{
        yellow: "blue",
        a,
        key: () => setA(10),
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

          editor.registerShortcut({
            key: "shift",
            command: (editor) => {
              console.log("shift", editor);
            },
          });
        },

        RenderPlugin,
      ]}
    ></BaseEditor>
  );
}
