import { View } from "@elf-framework/ui";

import { Canvas3D } from "./CanvasView";

export function RenderView() {
  return (
    <View position="relative" height="100%" overflow="hidden">
      <Canvas3D />
      <button
        type="button"
        style={{ position: "absolute" }}
        onClick={() => console.log("Hello World")}
      >
        Hello World
      </button>
    </View>
  );
}

export async function CenterPlugin(editor) {
  editor.registerGroupUI("center-panel", {
    renderView: <RenderView />,
  });
}
