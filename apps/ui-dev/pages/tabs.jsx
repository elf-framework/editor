import { start } from "@elf-framework/sapa";
// import { View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

function App() {
  return (
    <div>
      <Tab activeKey={1} justifyContent="flex-start">
        <TabItem title="tab1" key={1}>
          fdkjlfsdjkl
        </TabItem>
        <TabItem title="tab2" key={2}>
          fdkjlfsdjkl
        </TabItem>
        <TabItem title="tab3" key={3} disabled={true}>
          fdkjlfsdjkl
        </TabItem>
      </Tab>
    </div>
  );
}

start(
  <div>
    <App />
  </div>
);
