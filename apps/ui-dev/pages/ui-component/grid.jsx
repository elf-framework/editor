import { start } from "@elf-framework/sapa";
import { Grid, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../../component/Layout";

function App() {
  return (
    <Layout>
      <h1>Grid</h1>
      <Grid
        onClick={() => window.alert("Hello")}
        columns={[0.5, 0.5, 1, 2]}
        rows={[1, 1, 1]}
        style={{
          columnGap: 10,
          rowGap: 10,
        }}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <div style="background-color: yellow;border: 1px solid black;height: 100px;display:flex;justify-content: center;align-items: center;">
            {i + 1}
          </div>
        ))}
        <View backgroundColor="black" color="white" padding="10px">
          dsajfkdsf
        </View>
      </Grid>
    </Layout>
  );
}

start(
  <div>
    <App />
  </div>
);
