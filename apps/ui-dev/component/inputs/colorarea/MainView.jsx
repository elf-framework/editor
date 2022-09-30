import { ColorMixer, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
        position: "relative",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <ColorMixer color="red" shadow />
      </div>
    </VBox>
  );
}
