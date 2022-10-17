import { Switch, Grid, VBox } from "@elf-framework/ui";

export function EmphasisView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <Grid columns={2}>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <em style={{ color: `var(--color-gray-6)` }}>Not emphasized</em>
            <div>&nbsp;</div>
            <Switch>label</Switch>
            <Switch checked>label</Switch>
            <Switch>label</Switch>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <em style={{ color: `var(--color-gray-6)` }}>Emphasized</em>
            <div>&nbsp;</div>
            <Switch variant="primary" checked>
              Label
            </Switch>
            <Switch variant="success" checked>
              Label
            </Switch>
            <Switch variant="danger" checked>
              Label
            </Switch>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          By default, Switches are not emphasized (gray). This version is
          optimal for when the Switch is not the core part of an interface, such
          as in application panels, where all visual components are monochrome
          in order to direct focus to the content.
        </p>
        <p>
          The emphasized (blue) version provides a visual prominence that is
          optimal for forms, settings, lists or grids of assets, and other
          situations where a Switch need to be noticed.
        </p>
      </div>
    </Grid>
  );
}
