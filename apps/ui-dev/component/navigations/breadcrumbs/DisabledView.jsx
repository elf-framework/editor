import { Field, Grid, InputEditor, VBox } from "@elf-framework/ui";

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
        <Grid columns={1} style={{ padding: [0, 10] }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 20,
              alignItems: "center",
            }}
          >
            <Field label="Country" disabled>
              <InputEditor disabled />
            </Field>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          A field label in a disabled state shows that an input field exists,
          but is not available in that circumstance. This can be used to
          maintain layout continuity and communicate that an input field may
          become available later.
        </p>
      </div>
    </Grid>
  );
}
