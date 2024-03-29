import { Grid, Menu, VBox } from "@elf-framework/ui";

export function DescriptionView() {
  return (
    <Grid columns={1} gap={30}>
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
                description: "Share a low-res snapshot",
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
        <p>
          Menu items can display additional description text when necessary.
          Descriptions offer helpful details for clarifying the menu item, such
          as when introducing new features to users.
        </p>
        <p> Descriptions should be used sparingly and only when necessary.</p>
      </div>
    </Grid>
  );
}
