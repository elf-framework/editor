import { Checkbox, Grid, VBox } from "@elf-framework/ui";

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
            <Checkbox variant="dark">label</Checkbox>
            <Checkbox variant="dark" checked>
              label
            </Checkbox>
            <Checkbox variant="dark" indeterminate>
              label
            </Checkbox>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <em style={{ color: `var(--color-gray-6)` }}>Emphasized</em>
            <div>&nbsp;</div>
            <Checkbox>Label</Checkbox>
            <Checkbox checked>Label</Checkbox>
            <Checkbox indeterminate>Label</Checkbox>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          By default, checkboxes are not emphasized (gray). This version is
          optimal for when the checkbox is not the core part of an interface,
          such as in application panels, where all visual components are
          monochrome in order to direct focus to the content.
        </p>
        <p>
          The emphasized (blue) version provides a visual prominence that is
          optimal for forms, settings, lists or grids of assets, and other
          situations where a checkbox need to be noticed.
        </p>
      </div>
    </Grid>
  );
}
