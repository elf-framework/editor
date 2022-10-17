import { Grid, TextField, VBox } from "@elf-framework/ui";

export function ReadOnlyView() {
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
        <Grid columns={1} style={{ padding: [0, 10] }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 20,
              alignItems: "center",
            }}
          >
            <TextField
              label={"Read only"}
              readOnly
              value="xxx@elf-framework.com"
            />
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          Text fields have a read-only option for when content in the disabled
          state still needs to be shown. This allows for content to be copied,
          but not interacted with or changed. A text field does not have a
          read-only option if there is nothing entered in it.
        </p>
      </div>
    </Grid>
  );
}
