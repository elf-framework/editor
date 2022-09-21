import { RoundButton, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 120 }}
    >
      <div>
        <div style={{ gap: 10, display: "flex", justifyContent: "center" }}>
          <RoundButton size="extra-large" variant="primary">
            Getting started
          </RoundButton>
        </div>
      </div>
    </VBox>
  );
}
