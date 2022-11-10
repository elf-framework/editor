import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { FixedTooltip, VBox } from "@elf-framework/ui";

export function FixedTooltipView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [120, 40],
        height: 200,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 70,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FixedTooltip message={"Sample"}>
          <InfoOutlined /> Hello
        </FixedTooltip>
      </div>
    </VBox>
  );
}
