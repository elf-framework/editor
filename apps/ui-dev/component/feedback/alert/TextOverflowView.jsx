import { Alert, Button, Grid, VBox } from "@elf-framework/ui";

export function TextOverflowView() {
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
            <div style={{ textAlign: "right" }}>
              <Button outline variant="dark" shape="round" place="toast">
                Update
              </Button>
            </div>
          </Alert>
        </div>
      </VBox>
      <div>
        <p>
          When the text is too long for the available horizontal space, it wraps
          to form another line. In actionable alert banners, the button moves
          below the text prior to text wrapping.
        </p>
      </div>
    </Grid>
  );
}
