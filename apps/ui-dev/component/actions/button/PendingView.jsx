import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import { Grid, RoundButton, VBox } from "@elf-framework/ui";

export function PendingView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [40, 40],
          boxSizing: "border-box",
        }}
      >
        {["small", "medium", "large", "extra-large"].map((size) => (
          <div>
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
                <RoundButton size={size} pending play>
                  <SettingsFilled /> Share
                </RoundButton>
              </div>
            </Grid>
          </div>
        ))}
      </VBox>
      <div>
        <p>
          <p>
            Buttons can indicate that a quick progress taking place (e.g.,
            saving settings on a server). In this case, the label and optional
            icon disappear and a progress circle appears. The progress circle
            always shows an indeterminate progress.
          </p>

          <p>
            Use the pending state for a button sparingly. It should be reserved
            only for when the progress is supposed to be quick (taking 5 seconds
            or less), and when there is no better way to communicate as such.
          </p>
        </p>
      </div>
    </Grid>
  );
}
