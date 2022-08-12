import { start } from "@elf-framework/sapa";
import { Grid, InputPaint, VBox } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../component/UILayout";

start(function () {
  return (
    <UILayout>
      <Grid
        columns={3}
        style={{ gap: 10, backgroundColor: "#ececec", height: "100vh" }}
      >
        <div style={{ padding: 10 }}>
          <h1>Input Paint Editor</h1>
          <div>
            <InputPaint value="rgba(255, 0, 0, 0.5)" />
          </div>
        </div>
        <VBox>
          <h3>Text</h3>
        </VBox>
        <VBox>
          <h3>Placeholder</h3>
        </VBox>
      </Grid>
    </UILayout>
  );
});
