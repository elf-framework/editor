import { Grid, VBox, Slider } from "@elf-framework/ui";

export function GradientView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <Slider
            label={"Opacity"}
            value={40}
            min={0}
            max={100}
            step={1}
            valueFunc={(v) => `${v}%`}
            style={{
              backgroundImage: "linear-gradient(to right, #fff, #f00)",
            }}
          />
        </div>
      </VBox>
      <div>
        <p>
          A gradient can be added to the track of any slider to give more
          meaning to the range of values. Tracks with a gradient can also have a
          fill. A gradient track should not be used for choosing a precise
          color; use a color slider, color area, or color wheel instead.
        </p>
      </div>
    </Grid>
  );
}
