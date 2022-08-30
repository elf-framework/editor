import { Grid, Menu, VBox } from "@elf-framework/ui";

export function ValueView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
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
        <strong>Value</strong>
        <p>
          A menu item can display a related value in the value area. Examples of
          values include the selected option from a submenu, a keyboard shortcut
          for the action, or other content that clarifies the menu item.
        </p>
      </div>
    </Grid>
  );
}
