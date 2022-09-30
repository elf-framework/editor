import { Checkbox, Grid, VBox } from "@elf-framework/ui";

export function ErrorView() {
  return (
    <Grid columns={2} gap={30}>
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
            <Checkbox variant="danger">label</Checkbox>
            <Checkbox variant="danger" checked>
              label
            </Checkbox>
            <Checkbox variant="danger" indeterminate>
              label
            </Checkbox>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          Checkboxes can be marked as having an error to show that a selection
          needs to be made in order to move forward, or that a selection that
          was made is invalid. For example, in a form that requires a user to
          acknowledge legal terms before proceeding, the checkbox would show an
          unchecked error to communicate that it needs to be selected.
        </p>
      </div>
    </Grid>
  );
}
