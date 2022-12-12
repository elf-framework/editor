import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Button, Grid, RoundButton, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <VBox
      style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
    >
      {["extra-small", "small", "medium", "large", "extra-large"].map(
        (size) => (
          <Grid columns={[1, 1, 1]} gap={20}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <label>{size}</label>
            </div>
            <div>
              <RoundButton size={size} variant="primary">
                <SettingsFilled /> Share
              </RoundButton>
            </div>
            <div>
              <Button size={size} variant="primary">
                <SettingsFilled /> Share
              </Button>
            </div>
          </Grid>
        )
      )}
    </VBox>
  );
}
