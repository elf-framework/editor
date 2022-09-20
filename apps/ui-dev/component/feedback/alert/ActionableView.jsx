import { Alert, Grid, VBox, Button } from "@elf-framework/ui";

export function ActionableView() {
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
          <Alert
            variant="dark"
            closable
            actions={
              <Button outline shape="round" place="toast">
                open
              </Button>
            }
          >
            Your trial has expired. Please purchase to continue.
          </Alert>

          <Alert
            variant="dark"
            closable
            actions={
              <Button outline shape="round" place="toast">
                open
              </Button>
            }
            title="Title"
          >
            Your trial has expired. Please purchase to continue.
          </Alert>
        </div>
      </VBox>
      <div>
        <p>
          An alert banner always has a semantic meaning and uses semantic
          colors. Only gray (neutral), blue (informative), and red (negative)
          are available as options.
        </p>
      </div>
    </Grid>
  );
}
