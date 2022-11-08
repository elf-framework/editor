import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import { HelpText, VBox } from "@elf-framework/ui";

export function IconView() {
  return (
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
  );
}
