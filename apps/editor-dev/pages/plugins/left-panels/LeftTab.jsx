import { Tab, TabItem, View } from "@elf-framework/ui";

import { TreeView } from "../../components/treeview/TreeView";

export function LeftTab() {
  return (
    <Tab activeKey={1} full={true} quiet>
      <TabItem title="Item List" key={1}>
        <View position="absolute" top="0" right="0" bottom="0" left="0">
          <TreeView />
        </View>
      </TabItem>
    </Tab>
  );
}
