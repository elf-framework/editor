import { RadioGroup, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
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
          gap: 20,
        }}
      >
        <div style={{ display: "flex" }}>
          <em style={{ display: "inline-block", width: 100 }}>Small</em>
          <RadioGroup
            direction="vertical"
            value={10}
            options={[
              { value: 10, label: "Travel" },
              { value: 20, label: "Music" },
              { value: 30, label: "Shopping" },
            ]}
            onChange={(e, values) => console.log(values)}
          />
        </div>
        <div style={{ display: "flex" }}>
          <em style={{ display: "inline-block", width: 100 }}>Extra Large</em>
          <RadioGroup
            direction="vertical"
            value={10}
            size="extra-large"
            options={[
              { value: 10, label: "Travel" },
              { value: 20, label: "Music" },
              { value: 30, label: "Shopping" },
            ]}
            onChange={(e, values) => console.log(values)}
          />
        </div>
      </div>
    </VBox>
  );
}
