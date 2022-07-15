import { start } from "@elf-framework/sapa";
import { ColorGrid, Grid, VBox } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

start(function () {
  return (
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
        <ColorGrid
          items={[
            {
              title: "Document Colors",
              value: "document-color",
              colors: [
                "hsla(0, 100%, 65%, 1)",
                "hsla(0, 100%, 76%, 1)",
                "hsla(0, 67%, 42%, 0.3)",
                "hsla(205, 88%, 51%, 1)",
                "hsla(43, 100%, 58%, 1)",
                "hsla(14, 93%, 56%, 1)",
                "hsla(0, 18%, 80%, 1)",
                "hsla(0, 0%, 0%, 1)",
                "hsla(274, 71%, 59%, 1)",
                "hsla(148, 78%, 45%, 1)",
              ],
            },
            {
              title: "Document Colors 3",
              value: "document-color-3",
              colors: ["rgba(255, 0, 255, 0.5)", "rgba(255, 0, 0, 1)"],
            },
            {
              title: "Document Colors 2",
              value: "document-color-2",
              colors: ["rgba(0, 255, 255, 0.5)", "rgba(0, 55, 0, 1)"],
            },
          ]}
          selectedValue="document-color"
          onSelect={(color) => {
            this.setState({ color });
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
  );
});
