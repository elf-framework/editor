import MoreHorizFilled from "@elf-framework/icon/MoreHorizFilled";
import { Button, Panel } from "@elf-framework/ui";

export function MainView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        padding: [20, 100],
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          gap: 30,
          maxWidth: 900,
          padding: [20, 100],
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
    </div>
  );
}
