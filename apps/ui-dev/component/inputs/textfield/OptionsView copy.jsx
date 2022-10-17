import { Grid, TextField, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
            padding: [20, 40],
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField label="Email address" value="xxx@elf-framework.com" />
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Text fields should always have a label. In rare cases where context
            is sufficient and an accessibility expert has reviewed the design,
            the label could be undefined. These text fields without a visible
            label should still include an aria-label in HTML (depending on the
            context, “aria-label” or “aria-labelledby”).
          </p>
        </p>
      </div>
    </Grid>
  );
}
