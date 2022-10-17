import { Grid, Toast, VBox } from "@elf-framework/ui";

export function ClosableView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "40px 40px",
        }}
      >
        <div>
          <Toast direction="bottom-right" closable>
            Hello World yellow 234
          </Toast>
        </div>
      </VBox>
      <div>
        <p></p>
      </div>
    </Grid>
  );
}
