import { start } from "@elf-framework/sapa";
import { View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../../component/Layout";

function App() {
  return (
    <div>
      <h1>View : as button</h1>
      <View
        as="button"
        backgroundColor="blue"
        color="white"
        onClick={() => window.alert("yellow")}
      >
        blue
      </View>
      <h1>View : as input</h1>
      <View
        as="input"
        backgroundColor="yellow"
        color="blue"
        value="yellow"
        onClick={() => window.alert("yellow")}
      >
        blue
      </View>
      <h1>View : as select</h1>
      <View
        as="select"
        backgroundColor="yellow"
        color="blue"
        value="yellow"
        onChange={(e) => window.alert(e.target.value)}
      >
        <option value={"1"}>option: 1</option>
        <option selected={true} value={"2"}>
          option: 2
        </option>
        <option value={"3"}>option: 3</option>
        <option value={"4"}>option: 4</option>
      </View>
    </div>
  );
}

start(
  <Layout>
    <App />
  </Layout>
);
