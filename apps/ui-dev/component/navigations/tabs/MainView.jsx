import { Tab, TabItem, VBox } from "@elf-framework/ui";

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
        }}
      >
        <div>
          <Tab activeKey={1} showIndicator variant="primary">
            <TabItem title="Design" key={1}></TabItem>
            <TabItem title="Prototype" key={2}></TabItem>
            <TabItem title="Project" key={3} disabled={true}></TabItem>
          </Tab>
        </div>
      </div>
    </VBox>
  );
}
