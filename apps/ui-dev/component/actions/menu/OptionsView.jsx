import { Grid, Menu, VBox } from "@elf-framework/ui";

export function OptionsView() {
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
              { type: "item", title: "Document Setup" },
              { type: "item", title: "Settings" },
              { type: "item", title: "Copy" },
            ]}
            style={{
              position: "relative",
            }}
          />
        </div>
      </VBox>
      <div>
        <strong>Popover container</strong>
        <p>
          For desktop apps, a menu is shown in a popover by default. Mobile apps
          can show a menu in a popover when appropriate. Submenus cascade in
          another popover by default.
        </p>
      </div>
    </Grid>
  );
}
