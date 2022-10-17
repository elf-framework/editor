import { useState } from "@elf-framework/sapa";
import { Grid, VBox, Slider } from "@elf-framework/ui";

export function LabelPositionView() {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  return (
    <Grid columns={1} gap={30}>
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
            label={"Contrast"}
            value={value}
            fill
            min={-5}
            max={5}
            step={0.01}
            onInput={(v) => setValue(v)}
          />
          <Slider
            label={"Contrast"}
            labelPosition="side"
            value={value2}
            max={10000}
            step={20}
            onInput={(v) => setValue2(v)}
          />
        </div>
      </VBox>
      <div>
        <p>
          Labels can be placed either on top or on the side. Top labels are the
          default and are recommended because they work better with long copy,
          localization, and responsive layouts. Side labels are most useful when
          vertical space is limited.
        </p>
      </div>
    </Grid>
  );
}
