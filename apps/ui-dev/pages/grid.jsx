import { start } from "@elf-framework/sapa";
import { Grid } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

function App() {
  return (
    <div>
      <h1>Grid</h1>
      <Grid
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
      </Grid>
    </div>
  );
}

start(
  <div>
    <App />
  </div>
);
