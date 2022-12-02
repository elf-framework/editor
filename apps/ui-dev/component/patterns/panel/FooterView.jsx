import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import { Button, Panel } from "@elf-framework/ui";

export function FooterView() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 200px",
        fontSize: 13,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Panel
        title={"Panel title"}
        tools={[
          <Button iconOnly quiet>
            <MoreHorizFilled />
          </Button>,
        ]}
        footer={"footer"}
        style={{
          backgroundColor: "var(--color-gray-1)",
        }}
      >
        Learn how to work with green screen video with these tips for video
        makers.
      </Panel>
    </div>
  );
}
