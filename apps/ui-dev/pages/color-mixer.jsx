import { start } from "@elf-framework/sapa";
import { ColorMixer, Grid, VBox } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../component/Layout";

start(function () {
  return (
    <Layout>
      <Grid
        columns={3}
        style={{
          gap: 10,
          backgroundColor: "#ececec",
          height: "100vh",
          padding: 20,
        }}
      >
        <div>
          <ColorMixer
            color="red"
            onChange={(color) => {
              this.setState({ color });
            }}
            onLastChange={(color) => {
              console.log("last changed", color);
            }}
          />
        </div>
        <div>
          <h3>Text</h3>
          <div
            style={{
              display: "block",
              width: 200,
              height: 200,
              backgroundColor: this.state.color,
            }}
          >
            &nbsp;
          </div>
        </div>
        <VBox>
          <h3>Placeholder</h3>
        </VBox>
      </Grid>
    </Layout>
  );
});
