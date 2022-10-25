import { ColorMixer, VBox } from "@elf-framework/ui";

export function SelectionView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
        fontSize: 13,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div>
          <em>Hide slide</em>
        </div>
        <ColorMixer color="red" hideSlide />
        <div>&nbsp;</div>
        <div>
          <em>Hide inputs</em>
        </div>
        <ColorMixer color="red" hideInput />
      </div>
    </VBox>
  );
}
