import { RoundButton, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 40],
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 50,
          }}
        >
          <RoundButton disabled>Share</RoundButton>

          <RoundButton disabled outline>
            Share
          </RoundButton>
        </div>
      </div>
    </VBox>
  );
}
