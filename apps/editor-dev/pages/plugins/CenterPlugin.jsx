import { View } from "@elf-framework/ui";

export async function CenterPlugin(editor) {
  const { Canvas3D } = await import("./CanvasView");

  editor.registerGroupUI("center-panel", {
    renderView: (
      <View position="relative" height="100%" overflow="hidden">
        <Canvas3D />
        <button
          type="button"
          style={{ position: "absolute" }}
          onClick={() => console.log(editor.configs.get("yellow"))}
        >
          Hello
        </button>
      </View>
    ),
  });
}
