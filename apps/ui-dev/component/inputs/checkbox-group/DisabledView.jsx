import { CheckboxGroup, Grid, VBox } from "@elf-framework/ui";

export function DisabledView() {
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
        <Grid columns={1} style={{ padding: [0, 100] }}>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <div>&nbsp;</div>
            <CheckboxGroup
              direction="vertical"
              value={[10]}
              disabled
              options={[
                { value: 10, label: "Travel" },
                { value: 20, label: "Music" },
                { value: 30, label: "Shopping" },
              ]}
              onChange={(e, values) => console.log(values)}
            />
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          A checkbox group in a disabled state shows that a selection exists,
          but is not available in that circumstance. This can be used to
          maintain layout continuity and communicate that an action may become
          available later. The field label, checkboxes, and help text are all
          displayed in a disabled state when the checkbox group is disabled.
        </p>
      </div>
    </Grid>
  );
}
