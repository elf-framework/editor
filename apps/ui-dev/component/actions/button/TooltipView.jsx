import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Grid, RoundButton, Tooltip, VBox } from "@elf-framework/ui";

export function TooltipView() {
  return (
    <Grid columns={1} gap={30}>
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
            <Tooltip message={"Share"} show placement="top" variant="dark">
              <RoundButton iconOnly variant="primary">
                <SettingsFilled />
              </RoundButton>
            </Tooltip>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          When the button label is hidden, a tooltip is shown on hover that
          displays the label text and, if appropriate, a keyboard shortcut.
        </p>
      </div>
    </Grid>
  );
}
