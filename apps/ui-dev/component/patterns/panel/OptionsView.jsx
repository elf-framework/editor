import { Panel, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 200px",
        fontSize: 13,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <Panel>
          Learn how to work with green screen video with these tips for video
          makers.
        </Panel>
      </div>
    </VBox>
  );
}
