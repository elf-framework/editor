import { Grid } from "@elf-framework/ui";

export function HoverView() {
  return (
    <div class="hover-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Hover</strong>
          <div style={{ padding: 10 }}>
            A hover state is initiated by the user and appears when the user
            places their cursor over an interactive item.
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
                backgroundColor: "var(--color-hover-primary)",
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
                backgroundColor: "var(--color-hover-default)",
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
