import { View } from "@elf-framework/ui";

function Canvas3D() {
  return (
    <canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></canvas>
  );
}

export async function CenterPlugin(editor) {
  editor.registerGroupUI("center-panel", {
    renderView: (
      <View position="relative" height="100%" overflow="hidden">
        <Canvas3D />
      </View>
    ),
  });
}
