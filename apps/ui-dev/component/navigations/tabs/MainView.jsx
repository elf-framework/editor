import { Flex, Tab, TabItem, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        alignItems: "center",
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
          width: 400,
          padding: [50, 10],
        }}
      >
        <div>
          <Flex style={{ alignItems: "center", gap: 20 }}>
            <div style={{ width: 200 }}>Underline</div>
            <Tab activeKey={1} fitted>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3} disabled={true}></TabItem>
            </Tab>
          </Flex>
          &nbsp;
          <Flex style={{ alignItems: "center", gap: 20 }}>
            <div style={{ width: 200 }}>Button</div>
            <Tab activeKey={1} stripType="button" fitted>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3} disabled={true}></TabItem>
            </Tab>
          </Flex>
          &nbsp;
          <Flex style={{ alignItems: "center", gap: 20 }}>
            <div style={{ width: 200 }}>Group</div>

            <Tab activeKey={1} stripType="group" fitted>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3} disabled={true}></TabItem>
            </Tab>
          </Flex>
          &nbsp;
          <Flex style={{ alignItems: "center", gap: 20 }}>
            <div style={{ width: 200 }}>Round Group</div>

            <Tab activeKey={1} stripType="round-group" fitted>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3} disabled></TabItem>
            </Tab>
          </Flex>
          &nbsp;
          <Flex style={{ alignItems: "center", gap: 20 }}>
            <div style={{ width: 200 }}>Block</div>

            <Tab activeKey={1} stripType="block" fitted>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3} disabled></TabItem>
            </Tab>
          </Flex>
          &nbsp;
          <Flex style={{ alignItems: "center", gap: 20 }}>
            <div style={{ width: 200 }}>Classic</div>

            <Tab activeKey={1} stripType="classic" fitted>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3} disabled></TabItem>
            </Tab>
          </Flex>
          &nbsp;
        </div>
      </div>
    </VBox>
  );
}
