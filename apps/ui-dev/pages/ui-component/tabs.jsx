import { start } from "@elf-framework/sapa";
import { Tab, TabItem, View } from "@elf-framework/ui";
// import { View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../layouts/UILayout";

function App() {
  return (
    <View width={300}>
      <h1>Default Tabs</h1>
      <Tab activeKey={1}>
        <TabItem title="tab1" key={1}>
          fdsafadsf
        </TabItem>
        <TabItem title="tab2" key={2}>
          fdkjlfsdjkl {2}
        </TabItem>
        <TabItem title="tab3" key={3} disabled={true}>
          fdkjlfsdjkl {3}
        </TabItem>
      </Tab>
      <h1>Fitted Tabs</h1>
      <Tab activeKey={1} fitted>
        <TabItem title="tab1" key={1}>
          fdsafadsf
        </TabItem>
        <TabItem title="tab2" key={2}>
          fdkjlfsdjkl {2}
        </TabItem>
        <TabItem title="tab3" key={3}>
          fdkjlfsdjkl {3}
        </TabItem>
      </Tab>
      <h1>Disabled Tabs</h1>
      <Tab activeKey={1} fitted>
        <TabItem title="tab1" key={1}>
          fdsafadsf
        </TabItem>
        <TabItem title="tab2" key={2}>
          fdkjlfsdjkl {2}
        </TabItem>
        <TabItem title="tab3" key={3} disabled={true}>
          fdkjlfsdjkl {3}
        </TabItem>
      </Tab>
      <h1>Right Tabs</h1>
      <Tab activeKey={1} align="right">
        <TabItem title="tab1" key={1}>
          fdsafadsf
        </TabItem>
        <TabItem title="tab2" key={2}>
          fdkjlfsdjkl {2}
        </TabItem>
        <TabItem title="tab3" key={3} disabled={true}>
          fdkjlfsdjkl {3}
        </TabItem>
      </Tab>
    </View>
  );
}

start(
  <UILayout>
    <App />
  </UILayout>
);
