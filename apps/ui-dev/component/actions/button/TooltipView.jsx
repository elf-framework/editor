import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Grid, RoundButton, Tooltip, VBox } from "@elf-framework/ui";

export function TooltipView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 40],
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 50,
        }}
      >
        <Tooltip message={"Share"} show placement="top" variant="dark">
          <RoundButton iconOnly variant="primary">
            <SettingsFilled />
          </RoundButton>
        </Tooltip>
      </div>
    </VBox>
  );
}
