import { Grid, ProgressCircle, VBox } from "@elf-framework/ui";

export function IndeterminateView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          // height: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            padding: [0, 40],
            justifyContent: "center",
            alignItems: "flex-start",
            // height: 200,
            textAlign: "center",
          }}
        >
          <Grid columns={[1, 1]} gap={50}>
            <div>
              <div style={{ padding: [10, 0] }}>
                <em>Determinate</em>
              </div>
              <ProgressCircle size="large" variant="primary" animated />
            </div>
            <div>
              <div style={{ padding: [10, 0] }}>
                <em>Indeterminate </em>
              </div>
              <ProgressCircle size="large" indeterminate variant="primary" />
            </div>
          </Grid>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            A progress circle can be either determinate or indeterminate. By
            default, progress circles are determinate. Use a determinate
            progress circle when progress can be calculated against a specific
            goal (e.g., downloading a file of a known size). Use an
            indeterminate progress circle when progress is happening but the
            time or effort to completion can’t be determined (e.g., attempting
            to reconnect to a server).
          </p>
        </p>
      </div>
    </Grid>
  );
}
