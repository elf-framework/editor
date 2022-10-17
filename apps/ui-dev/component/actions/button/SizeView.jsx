import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Grid, RoundButton, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
      >
        {["small", "medium", "large", "extra-large"].map((size) => (
          <Grid columns={[1, 2]} gap={20}>
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
          </Grid>
        ))}
      </VBox>
      <div>
        <p>
          Buttons come in four different sizes: small, medium, large, and
          extra-large. The medium size is the default and most frequently used
          option. Use the other sizes sparingly; they should be used to create a
          hierarchy of importance within the page.
        </p>
      </div>
    </Grid>
  );
}
