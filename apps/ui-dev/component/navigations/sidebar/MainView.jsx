import SettingsAccessibilityFilled from "@elf-framework/icon/SettingsAccessibilityFilled";
import { Flex, Sidebar } from "@elf-framework/ui";

export function MainView() {
  return (
    <Flex
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-2)",
        padding: [60, 100],
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 30,
          width: 240,
          position: "relative",
        }}
      >
        <Sidebar
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          items={[
            "Section title",
            { title: "xxx", link: "xxx" },
            { type: "section", title: "Section title 2" },
            { title: "xxx", link: "xxx" },
            "Hello World",
            { title: "blue" },
            { title: "group", items: [{ title: "xxxx", selected: true }] },
          ]}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 30,
          position: "relative",
        }}
      >
        <Sidebar
          compact
          header={<SettingsAccessibilityFilled />}
          footer={<SettingsAccessibilityFilled />}
          items={[
            {
              title: "xxx",
              link: "xxx",
              selected: true,
              icon: <SettingsAccessibilityFilled />,
            },
            {
              title: "xxx",
              link: "xxx",
              selected: true,
              icon: <SettingsAccessibilityFilled />,
            },
            {
              title: "xxx",
              link: "xxx",
              icon: <SettingsAccessibilityFilled />,
            },
            {
              title: "xxx",
              link: "xxx",
              icon: <SettingsAccessibilityFilled />,
            },
            {
              title: "xxx",
              link: "xxx",
              icon: <SettingsAccessibilityFilled />,
              tooltip: "xxx",
            },
            {
              title: "xxx",
              link: "xxx",
              icon: <SettingsAccessibilityFilled />,
            },
          ]}
        />
      </div>
    </Flex>
  );
}
