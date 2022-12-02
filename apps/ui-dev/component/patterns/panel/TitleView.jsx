import { Panel, VBox } from "@elf-framework/ui";

export function TitleView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 200px",
        fontSize: 13,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Panel title="Sample Panel">
        Learn how to work with green screen video with these tips for video
        makers.
      </Panel>
    </VBox>
  );
}
