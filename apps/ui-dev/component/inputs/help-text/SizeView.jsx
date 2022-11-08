import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import { HelpText, VBox } from "@elf-framework/ui";

export function SizeView() {
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
        {["small", "medium", "large", "extra-large"].map((size) => (
          <div>
            <div>
              <em>{size}</em>
            </div>
            <HelpText icon={<WarningOutlined />} size={size} variant="danger">
              Password must be at least 8 characters.
            </HelpText>
          </div>
        ))}
      </div>
    </VBox>
  );
}
