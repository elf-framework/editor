import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Grid, RoundButton, VBox } from "@elf-framework/ui";

export function JustifiedView() {
  return (
    <Grid columns={1} gap={30}>
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
      <div>
        <p>
          A button can become justified. By default, it is not justified since
          the button size depends on the label and/or icon inside of each
          button. When a button is justified, it takes up the entire available
          container width.
        </p>
      </div>
    </Grid>
  );
}
