import { Checkbox, Grid, VBox } from "@elf-framework/ui";

export function OptionsView() {
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
            <em style={{ color: `var(--color-gray-6)` }}>with label</em>
            <div>&nbsp;</div>
            <Checkbox>label</Checkbox>
            <Checkbox checked>label</Checkbox>
            <Checkbox indeterminate>label</Checkbox>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <em style={{ color: `var(--color-gray-6)` }}>Standalone</em>
            <div>&nbsp;</div>
            <Checkbox />
            <Checkbox checked />
            <Checkbox indeterminate />
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
