import { Alert, Grid, VBox } from "@elf-framework/ui";

export function DismissableView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
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
          <Alert variant="dark" dismissable closable>
            Your trial has expired. Please purchase to continue.
          </Alert>
        </div>
      </VBox>
      <div>
        <p>
          An alert banner can include an icon-only close button to dismiss it.
        </p>
      </div>
    </Grid>
  );
}
