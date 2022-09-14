import { Grid, ProgressBar, VBox } from "@elf-framework/ui";

export function IndeterminateView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            padding: [20, 40],
            justifyContent: "center",
            alignItems: "flex-start",
            height: 200,
          }}
        >
          <ProgressBar
            indeterminate
            title="Loading data..."
            style={{ width: 400 }}
          />
        </div>
      </VBox>
      <div>
        <p>
          <p>
            A progress bar can be either determinate or indeterminate. By
            default, progress bars are determinate. Use a determinate progress
            bar when progress can be calculated against a specific goal (e.g.,
            downloading a file of a known size). Use an indeterminate progress
            bar when progress is happening but the time or effort to completion
            can’t be determined (e.g., attempting to reconnect to a server).
          </p>
        </p>
      </div>
    </Grid>
  );
}
