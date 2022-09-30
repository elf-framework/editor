import { Grid } from "@elf-framework/ui";

export function DownView() {
  return (
    <div class="down-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Down</strong>
          <div style={{ padding: 10 }}>
            A down state is initiated by the user and communicates when an
            interactive item is pressed (by a cursor, stylus, or finger).
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
              gap: 20,
            }}
          >
            <button
              type="button"
              style={{
                backgroundColor: "var(--color-down-primary)",
                color: "white",
                border: 0,
                borderRadius: 25,
                padding: "10px 20px",
                fontWeight: "900",
              }}
            >
              Action
            </button>

            <button
              type="button"
              style={{
                backgroundColor: "var(--color-down-default)",
                color: "var(--color-text-default)",
                border: "1px solid var(--color-black)",
                borderRadius: 4,
                padding: "10px 20px",
              }}
            >
              Action
            </button>
          </div>
        </div>
      </Grid>
    </div>
  );
}
