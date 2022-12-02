import SettingsAccessibilityFilled from "@elf-framework/icon/SettingsAccessibilityFilled";
import { Sidebar, VBox } from "@elf-framework/ui";

export function TooltipView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-2)",
        padding: "30px 150px",
        fontSize: 13,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
          padding: [20, 40],
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sidebar
          compact
          items={[
            {
              title: "xxx",
              link: "xxx",
              selected: true,
              icon: <SettingsAccessibilityFilled />,
              tooltip: "New feature",
            },
            {
              title: "xxx",
              link: "xxx",
              icon: <SettingsAccessibilityFilled />,
              tooltip: "New feature",
            },
            {
              title: "xxx",
              link: "xxx",
              icon: <SettingsAccessibilityFilled />,
              tooltip: "New feature",
            },
          ]}
        />
      </div>
    </VBox>
  );
}
