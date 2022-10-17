import { Grid, ProgressCircle, VBox } from "@elf-framework/ui";

export function MinMaxValueView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "20px 20px",
          fontSize: 13,
          height: 400,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            padding: [0, 40],
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            height: 200,
          }}
        >
          <div>
            <div style={{ margin: [10, 0] }}>
              <strong>Example: file upload</strong>
              <Grid columns={[1, 1]} gap={100} style={{ marginTop: 30 }}>
                <div>
                  <div>Value: 15</div>
                  <div>Min value: 0</div>
                  <div>Max value: 18</div>
                </div>

                <div>
                  <ProgressCircle value={15} max={18} size="large" />
                </div>
              </Grid>
            </div>
          </div>

          <div>
            <div style={{ margin: [10, 0] }}>
              <strong>Example: filter processing</strong>
              <Grid columns={[1, 1]} gap={100} style={{ marginTop: 30 }}>
                <div>
                  <div>Value: 0.92</div>
                  <div>Min value: 0</div>
                  <div>Max value: 1</div>
                </div>
                <div>
                  <ProgressCircle max={1} value={0.92} size="large" />
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          The value is the progress of a system operation (e.g., downloading,
          uploading, processing) within the progress circle’s range, from the
          min value to max value.
        </p>
        <p>
          The min and max values can also be customized appropriately for
          whatever the progress circle is showing. By default, the min value
          starts at 0 and the max value is set to 100.
        </p>
        <p>
          These values are not applicable when a progress circle is
          indeterminate.
        </p>
      </div>
    </Grid>
  );
}
