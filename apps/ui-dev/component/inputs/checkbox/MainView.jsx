import { Checkbox, VBox } from "@elf-framework/ui";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 30,
          fontSize: 20,
        }}
      >
        <em style={{ color: "var(--color-gray-5)" }}>Interests</em>
        <Checkbox checked={true}>Illustration</Checkbox>

        <Checkbox checked={true}>Photo</Checkbox>

        <Checkbox indeterminate checked={true}>
          UI/UX Design
        </Checkbox>
      </div>
    </VBox>
  );
}
