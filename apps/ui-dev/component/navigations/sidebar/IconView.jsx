import SettingsAccessibilityFilled from "@elf-framework/icon/SettingsAccessibilityFilled";
import { Sidebar, VBox } from "@elf-framework/ui";

export function IconView() {
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
          items={[
            "Section title",
            {
              type: "section",
              title: "Section title 2",
              icon: <SettingsAccessibilityFilled />,
            },
            "-",
            {
              title: "xxx",
              link: "xxx",
              icon: <SettingsAccessibilityFilled />,
            },
            { title: "xxx", link: "xxx", selected: true },
            "-",
            "Hello World",
            { title: "blue" },
            { title: "group", items: [{ title: "xxxx" }] },
          ]}
        />
      </div>
    </VBox>
  );
}
