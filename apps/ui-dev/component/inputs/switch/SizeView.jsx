import { Switch, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 80],
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
        <div style={{ display: "flex", gap: 10 }}>
          <em style={{ display: "inline-block", width: 100 }}>Small</em>
          <Switch size="small" checked>
            Label
          </Switch>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <em style={{ display: "inline-block", width: 100 }}>Medium</em>
          <Switch size="medium" checked>
            Label
          </Switch>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <em style={{ display: "inline-block", width: 100 }}>Large</em>
          <Switch size="large" checked>
            Label
          </Switch>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <em style={{ display: "inline-block", width: 100 }}>Extra large</em>
          <Switch size="extra-large" checked>
            Label
          </Switch>
        </div>
      </div>
    </VBox>
  );
}
