import { Grid, Menu, VBox } from "@elf-framework/ui";

export function VariantView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 60px",
        }}
      >
        <div
          style={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <strong>Light</strong>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <strong>Dark</strong>
            <Menu
              variant="dark"
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
        </div>
      </VBox>
      <div>
        <p>
          Variants are used to display a related value in the value area.
          <ul>
            <li>light</li>
            <li>dark</li>
          </ul>
        </p>
      </div>
    </Grid>
  );
}
