import { Switch, Grid, VBox } from "@elf-framework/ui";

export function ReadOnlyView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
        fontSize: 13,
      }}
    >
      <Grid columns={1} style={{ padding: [0, 100] }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <div>&nbsp;</div>
          <Switch readOnly>label</Switch>
          <Switch readOnly checked>
            label
          </Switch>
          <Switch readOnly indeterminate>
            label
          </Switch>
        </div>
      </Grid>
    </VBox>
  );
}
