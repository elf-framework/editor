import { Grid, Menu, VBox } from "@elf-framework/ui";

export function SectionView() {
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
                type: "section",
                title: "Section 1",
              },
              {
                type: "item",
                title: "Quick export",
                shortcut: "⌘ + Ctrl+E",
                description: "Share a low-res snapshot",
                items: [{ type: "item", title: "Document Setup" }],
              },
              { type: "item", title: "Settings" },
              "-",
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
        <strong>Section headers</strong>
        <p>
          Use a section header when a menu section requires a descriptor.
          Section headers are helpful when two or more sections differ in their
          functionality or relationships.
        </p>
      </div>
    </Grid>
  );
}
