import { Grid } from "@elf-framework/ui";

export function BoldView() {
  return (
    <div class="bold-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Bold</strong>
          <div style={{ padding: 10 }}>
            Bold is used to add hierarchy within a sentence or to call
            attention, for example, in buttons and toasts. It’s also used to
            directly refer to the names of UI elements in running text.
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "var(--color-gray-0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 150,
            }}
          >
            <button
              type="button"
              style={{
                backgroundColor: "var(--color-action-primary)",
                border: 0,
                borderRadius: 25,
                padding: "10px 20px",
                fontWeight: "900",
              }}
            >
              Welcome
            </button>
          </div>
        </div>
      </Grid>
    </div>
  );
}
