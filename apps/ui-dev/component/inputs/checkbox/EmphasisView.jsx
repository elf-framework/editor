import { Checkbox, Grid, VBox } from "@elf-framework/ui";

export function EmphasisView() {
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
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <em style={{ color: `var(--color-gray-6)` }}>Emphasized</em>
          <div>&nbsp;</div>
          <Checkbox>Label</Checkbox>
          <Checkbox checked>Label</Checkbox>
          <Checkbox indeterminate>Label</Checkbox>
        </div>
      </Grid>
    </VBox>
  );
}
