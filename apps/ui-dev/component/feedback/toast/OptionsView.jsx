import { Grid, Toast, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "40px 40px",
        }}
      >
        <div>
          <Toast direction="bottom-right">Hello World yellow 234</Toast>
        </div>
      </VBox>
      <div>
        <p>
          Toasts must include text to communicate a message. Write the text as
          concisely as possible while still being clear about what has happened
          or is happening. View the toast content standards for writing
          guidelines.
        </p>
      </div>
    </Grid>
  );
}
