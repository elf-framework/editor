import { Field, Grid, InputEditor, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
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
  );
}
