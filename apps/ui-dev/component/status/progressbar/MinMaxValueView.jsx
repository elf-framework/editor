import { Grid, ProgressBar, VBox } from "@elf-framework/ui";

export function MinMaxValueView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 400,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            padding: [20, 40],
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: 200,
          }}
        >
          <div>
            <div style={{ margin: [10, 0] }}>
              <strong>Example: file upload</strong>
              <div>&nbsp;</div>
              <div>Value: 15</div>
              <div>Min value: 0</div>
              <div>Max value: 18</div>
            </div>
            <ProgressBar title="Loading data..." value={15} />
          </div>

          <div>
            <div style={{ margin: [10, 0] }}>
              <strong>Example: filter processing</strong>
              <div>&nbsp;</div>
              <div>Value: 0.92</div>
              <div>Min value: 0</div>
              <div>Max value: 1</div>
            </div>
            <ProgressBar title="Loading data..." max={1} value={0.92} />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            The value is the progress of a system operation (e.g., downloading,
            uploading, processing) within the progress bar’s range, from the min
            value to max value.
          </p>
          <p>
            The min and max values can also can be customized appropriately for
            whatever the progress bar is showing. By default, the min value
            starts at 0 and the max value is set to 100.{" "}
          </p>
          <p>
            These values are not applicable when a progress bar is
            indeterminate.
          </p>
        </p>
      </div>
    </Grid>
  );
}
