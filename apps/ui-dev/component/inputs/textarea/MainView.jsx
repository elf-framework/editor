import { TextArea, VBox } from "@elf-framework/ui";

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
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 30,
          width: 240,
        }}
      >
        <TextArea
          label={"Description"}
          value={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
          rows={7}
        />
      </div>
    </VBox>
  );
}
