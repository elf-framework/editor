import { Grid, VBox, Slider } from "@elf-framework/ui";

export function MinMaxView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 20,
            gap: 50,
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong>Example: Opacity</strong>
              <label>Value: 40</label>
              <label>Min value: 0</label>
              <label>Max value: 100</label>
              <label>Step: 1</label>
            </div>
            <Slider
              label={"Opacity"}
              value={40}
              fill
              min={0}
              max={100}
              step={1}
              valueFunc={(v) => `${v}%`}
            />
          </div>
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong>Example: Contrast</strong>
              <label>Value: 40</label>
              <label>Min value: 0</label>
              <label>Max value: 100</label>
              <label>Step: 1</label>
            </div>
            <Slider
              label={"Contrast"}
              value={40}
              fill
              min={0}
              max={100}
              step={1}
              valueFunc={(v) => `${v}%`}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          The value is the number selected within the slider’s range, from the
          min value to max value.
        </p>
        <p>
          The min and max values can also be customized appropriately for
          whatever the slider is showing. By default, the min value starts at 0
          and the max value is set to 100.
        </p>
        <p>
          The step is the increment by which these values increase or decrease.
          A step value of 1 (the default) lets a user only select whole numbers
          within the min and max range.
        </p>
      </div>
    </Grid>
  );
}
