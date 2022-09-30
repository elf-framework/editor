import { Alert, Grid, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 40px",
          height: 280,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
          }}
        >
          <Alert>Your trial has expired. Please purchase to continue.</Alert>
        </div>
      </VBox>
      <div>
        <p>
          A popover’s width and height can be customized appropriately for its
          context.
        </p>
      </div>
    </Grid>
  );
}
