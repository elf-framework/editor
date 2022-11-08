import { VBox, Slider } from "@elf-framework/ui";

export function MinMaxView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 200px",
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
  );
}
