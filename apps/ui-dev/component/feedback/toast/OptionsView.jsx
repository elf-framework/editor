import { Toast, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
      }}
    >
      <div>
        <Toast direction="bottom-right">Hello World yellow 234</Toast>
      </div>
    </VBox>
  );
}
