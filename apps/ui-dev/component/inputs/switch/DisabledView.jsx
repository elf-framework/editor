import { Switch, Grid, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <Grid columns={1} style={{ padding: [0, 100] }}>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <div>&nbsp;</div>
            <Switch disabled>label</Switch>
            <Switch disabled checked>
              label
            </Switch>
            <Switch disabled indeterminate>
              label
            </Switch>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          A Switch in a disabled state shows that a selection exists, but is not
          available in that circumstance. This can be used to maintain layout
          continuity and communicate that an action may become available later.
        </p>
      </div>
    </Grid>
  );
}
