import { Checkbox, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 120],
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
        <div>
          <em style={{ display: "inline-block", width: 100 }}>Small</em>
          <Checkbox size="small" checked>
            Label
          </Checkbox>
        </div>
        <div>
          <em style={{ display: "inline-block", width: 100 }}>Medium</em>
          <Checkbox size="medium" checked>
            Label
          </Checkbox>
        </div>
        <div>
          <em style={{ display: "inline-block", width: 100 }}>Large</em>
          <Checkbox size="large" checked>
            Label
          </Checkbox>
        </div>
        <div>
          <em style={{ display: "inline-block", width: 100 }}>Extra large</em>
          <Checkbox size="extra-large" checked>
            Label
          </Checkbox>
        </div>
      </div>
    </VBox>
  );
}
