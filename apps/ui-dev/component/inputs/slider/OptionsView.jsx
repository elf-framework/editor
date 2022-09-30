import { useState } from "@elf-framework/sapa";
import { Grid, VBox, Slider } from "@elf-framework/ui";

export function OptionsView() {
  const [value, setValue] = useState(0);
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
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <Slider
            label={"Contrast"}
            value={value}
            max={10000}
            step={20}
            onInput={(v) => setValue(v)}
          />
        </div>
      </VBox>
      <div>
        <p>
          Sliders should always have a label. In rare cases where context is
          sufficient and an accessibility expert has reviewed the design, the
          label could be undefined. These sliders should still include an
          aria-label in HTML (depending on the context, “aria-label” or
          “aria-labelledby”).
        </p>
      </div>
    </Grid>
  );
}
