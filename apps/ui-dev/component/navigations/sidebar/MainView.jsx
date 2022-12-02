import { Avatar, Sidebar, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 300],
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 30,
          width: 240,
          position: "relative",
        }}
      >
        <Sidebar
          items={[
            "Section title",
            { type: "section", title: "Section title 2" },
            "-",
            { title: "xxx", link: "xxx" },
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
