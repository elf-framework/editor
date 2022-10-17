import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import { ColorMixer, Grid, HelpText, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <Grid columns={1} style={{ padding: [0, 10] }}>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <HelpText icon={<WarningOutlined />} disabled>
              Password must be at least 8 characters.
            </HelpText>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          Help text using the neutral variant can be displayed in a disabled
          state. The text appears with a lighter gray that matches the style of
          other components in a disabled state. Help text using the negative
          variant cannot be displayed in a disabled state because it
          communicates an error, and error messages should not be visible when
          the component is disabled.
        </p>
      </div>
    </Grid>
  );
}
