import { ProgressCircle, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 300],
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 240,
          gap: 30,
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <ProgressCircle
            size="extra-large"
            value={10}
            indeterminate
            variant="danger"
          />
          <ProgressCircle size="large" value={50} variant="primary" />
          <ProgressCircle animated />
          <ProgressCircle size="small" value={30} />
          <ProgressCircle
            animated
            animationType="spin"
            value={30}
            style={{
              duration: "1s",
            }}
          />
        </div>
      </div>
    </VBox>
  );
}
