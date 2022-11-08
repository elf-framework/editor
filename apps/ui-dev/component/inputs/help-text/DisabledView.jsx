import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import { Grid, HelpText, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 20px",
        fontSize: 13,
      }}
    >
      <Grid columns={1} style={{ padding: [0, 10] }}>
        <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
          <HelpText icon={<WarningOutlined />} disabled>
            Password must be at least 8 characters.
          </HelpText>
        </div>
      </Grid>
    </VBox>
  );
}
