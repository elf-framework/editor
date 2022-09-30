import { Grid } from "@elf-framework/ui";

export function DefaultView() {
  return (
    <div class="default-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Default</strong>
          <div style={{ padding: 10 }}>
            This is the default state of a component or item when not interacted
            with.
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
                backgroundColor: "var(--color-primary)",
                color: "white",
                border: 0,
                borderRadius: 25,
                padding: "7px 20px",
                fontWeight: "900",
              }}
            >
              Action
            </button>

            <button
              type="button"
              style={{
                backgroundColor: "var(--color-background-default)",
                color: "var(--color-text-default)",
                border: "1px solid var(--color-black)",
                borderRadius: 4,
                padding: "7px 20px",
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
