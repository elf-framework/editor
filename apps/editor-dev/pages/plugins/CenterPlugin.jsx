import { useGetCommand } from "@elf-framework/base-editor";
import { useStoreValue } from "@elf-framework/sapa";
import { View } from "@elf-framework/ui";

import { Canvas3D } from "./CanvasView";

export function B() {
  const [value, setValue] = useStoreValue("sample.2", 100);
  return (
    <div
      style={{ position: "absolute", top: 100, left: 100 }}
      onClick={() => {
        setValue((v) => {
          return v + 1;
        });
      }}
    >
      B - {value}
    </div>
  );
}

export function RenderView() {
  const [value, setValue] = useStoreValue("sample", 0);
  const testCallback = useGetCommand("test", 1, 2, 3);

  return (
    <View position="relative" height="100%" overflow="hidden">
      <Canvas3D />
      <button
        type="button"
        style={{ position: "absolute" }}
        onClick={() => {
          setValue((v = 0) => {
            console.log(v);
            return v + 1;
          });

          testCallback(4);
        }}
      >
        Hello World 2 {value} 5
      </button>
      <B />
    </View>
  );
}

export async function CenterPlugin(editor) {
  editor.registerGroupUI("center-panel", {
    renderView: <RenderView />,
  });

  editor.registerCommand({
    command: "test",
    execute: function (editor, ...args) {
      console.log("test command (", ...args, ")");
    },
  });
}
