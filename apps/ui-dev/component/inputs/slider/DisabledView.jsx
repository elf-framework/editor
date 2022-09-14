import { Grid, VBox, Slider } from "@elf-framework/ui";

export function DisabledView() {
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
            disabled
            label={"Exposure"}
            value={1.83}
            fill
            min={-5}
            max={5}
            step={0.01}
            valueFunc={(v) => `${v < 0 ? "-" : "+"} ${v}%`}
          />
        </div>
      </VBox>
      <div>
        <p>
          A Switch in a disabled state shows that a selection exists, but is not
          available in that circumstance. This can be used to maintain layout
          continuity and communicate that an action may become available later.
        </p>
      </div>
    </Grid>
  );
}
