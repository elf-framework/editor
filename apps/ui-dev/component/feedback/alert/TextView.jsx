import { Alert, Grid, VBox } from "@elf-framework/ui";

export function TextView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
          }}
        >
          <Alert variant="dark" closable>
            Your trial has expired. Please purchase to continue.
          </Alert>
        </div>
      </VBox>
      <div>
        <p>
          Text is required for all alert banners. The message should be concise
          and, if applicable, describe the next step that a user can take.
        </p>
      </div>
    </Grid>
  );
}
