import { Checkbox, Grid, VBox } from "@elf-framework/ui";

export function SelectionView() {
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
        <Grid columns={3}>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 10 }}
          >
            <em style={{ color: `var(--color-gray-6)` }}>Not selected</em>
            <div>&nbsp;</div>
            <Checkbox variant="dark">Label</Checkbox>
            <Checkbox>Label</Checkbox>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 10 }}
          >
            <em style={{ color: `var(--color-gray-6)` }}>Indeterminate</em>
            <div>&nbsp;</div>
            <Checkbox variant="dark" indeterminate>
              Label
            </Checkbox>
            <Checkbox indeterminate>Label</Checkbox>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", padding: 10 }}
          >
            <em style={{ color: `var(--color-gray-6)` }}>Selected</em>
            <div>&nbsp;</div>
            <Checkbox variant="dark" checked>
              Label
            </Checkbox>
            <Checkbox checked>Label</Checkbox>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          A popover’s width and height can be customized appropriately for its
          context.
        </p>
      </div>
    </Grid>
  );
}
