import { VBox, Slider } from "@elf-framework/ui";

export function FillView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 200],
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
  );
}
