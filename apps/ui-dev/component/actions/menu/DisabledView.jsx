import { Grid, Menu, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Menu
            items={[
              {
                type: "item",
                title: "Quick export",
                shortcut: "⌘ + Ctrl+E",
                description: "Share a low-res snapshot",
                disabled: true,
                items: [{ type: "item", title: "Document Setup" }],
              },
              { type: "item", title: "Settings" },
              {
                type: "item",
                title: "Open a copy",
                description: "Open in iPad",
              },
            ]}
            style={{
              position: "relative",
            }}
          />
        </div>
      </VBox>
      <div>
        <strong>Disabled</strong>
        <p>
          A menu item in a disabled state shows that an option exists, but is
          not available in that circumstance. This state can be used to maintain
          layout continuity and to communicate that an action may become
          available later.
        </p>
      </div>
    </Grid>
  );
}
