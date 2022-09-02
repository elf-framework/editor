import { HelpText, InputEditor, VBox } from "@elf-framework/ui";

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
      <div style={{ textAlign: "left" }}>
        <InputEditor value="sample text" />
        <HelpText variant="danger">
          Create password with at least 8 characters.
        </HelpText>
      </div>
    </VBox>
  );
}
