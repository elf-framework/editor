import { Grid, VBox, Slider } from "@elf-framework/ui";

export function FillView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [60, 40],
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <Slider
            label={"Opacity"}
            fill
            value={40}
            min={0}
            max={100}
            step={1}
            valueFunc={(v) => `${v}%`}
          />
        </div>
      </VBox>
      <div>
        <p>
          The track of the slider can have a fill. By default, the fill
          originates from the left side of the track.
        </p>
      </div>
    </Grid>
  );
}
