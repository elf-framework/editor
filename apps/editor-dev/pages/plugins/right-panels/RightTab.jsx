import { Tab, TabItem } from "@elf-framework/ui";

export function RightTab() {
  return (
    <Tab activeKey={1} full={true} quiet>
      <TabItem title="Style" key={1}>
        Style
      </TabItem>
      <TabItem title="Inspector" key={2}>
        Inspector
      </TabItem>
      <TabItem title="Code" key={3}>
        Code
      </TabItem>
    </Tab>
  );
}
