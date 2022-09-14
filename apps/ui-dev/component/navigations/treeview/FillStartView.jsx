import { Grid, VBox, Slider } from "@elf-framework/ui";

export function FillStartView() {
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 20,
            gap: 50,
          }}
        >
          <Slider
            label={"Exposure"}
            value={1.83}
            fill
            fillOffset={0}
            min={-5}
            max={5}
            step={0.01}
            valueFunc={(v) => `${v < 0 ? "-" : "+"} ${v}%`}
          />
        </div>
      </VBox>
      <div>
        <p>
          If the value represents an offset, the fill start can be set to
          represent the point of origin. This allows the slider fill to start
          from inside the track.
        </p>
      </div>
    </Grid>
  );
}
