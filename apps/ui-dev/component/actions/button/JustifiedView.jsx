import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { RoundButton, VBox } from "@elf-framework/ui";

export function JustifiedView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [40, 100],
      }}
    >
      <div>
        <RoundButton justified variant="primary">
          Render
        </RoundButton>
      </div>
      <div>
        <RoundButton justified variant="primary">
          <SettingsFilled /> Share
        </RoundButton>
      </div>
    </VBox>
  );
}
