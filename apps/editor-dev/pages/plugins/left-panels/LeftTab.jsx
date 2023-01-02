import { Tab, TabItem, TreeView, View } from "@elf-framework/ui";

export function LeftTab() {
  return (
    <Tab
      activeKey={1}
      full={true}
      align="center"
      fitted
      variant="primary"
      stripStyle={{
        gap: 0,
        padding: [0, 20, 10, 20],
      }}
    >
      <TabItem title="Projects" key={1}>
        <View position="absolute" top="0" right="0" bottom="0" left="0">
          <TreeView />
        </View>
      </TabItem>
      <TabItem title="Workspaces" key={2}>
        Workspaces
      </TabItem>
    </Tab>
  );
}
