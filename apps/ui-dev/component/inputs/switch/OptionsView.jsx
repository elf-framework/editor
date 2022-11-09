import { Switch, Grid, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
        fontSize: 13,
      }}
    >
      <Grid columns={2}>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <em style={{ color: `var(--color-gray-6)` }}>With label</em>
          <div>&nbsp;</div>
          <Switch>label</Switch>
          <Switch checked>label</Switch>
        </div>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <em style={{ color: `var(--color-gray-6)` }}>Standalone</em>
          <div>&nbsp;</div>
          <Switch />
          <Switch checked />
        </div>
      </Grid>
    </VBox>
  );
}
