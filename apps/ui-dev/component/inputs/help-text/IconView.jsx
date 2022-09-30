import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import { Grid, HelpText, VBox } from "@elf-framework/ui";

export function IconView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
            padding: [20, 40],
          }}
        >
          <div>
            <div>
              <em>With icon</em>
            </div>
            <HelpText icon={<WarningOutlined />} variant="danger">
              Password must be at least 8 characters.
            </HelpText>
          </div>
          <div>
            <div>
              <em>Without icon</em>
            </div>
            <HelpText variant="danger">
              Password must be at least 8 characters.
            </HelpText>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Help text using the negative variant can have an optional icon. In
            most cases, help text is used with a component that already displays
            an icon communicating an error (e.g., text field, text area, picker,
            combo box), so it’s not necessary to include another icon. In other
            cases, help text that is used with a component that does not display
            an icon communicating an error (e.g., checkbox group, radio group)
            needs to display an icon.
          </p>
        </p>
      </div>
    </Grid>
  );
}
