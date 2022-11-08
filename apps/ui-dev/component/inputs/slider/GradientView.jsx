import { VBox, Slider } from "@elf-framework/ui";

export function GradientView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 200px",
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
  );
}
