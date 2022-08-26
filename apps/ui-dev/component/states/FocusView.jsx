import { Grid } from "@elf-framework/ui";

export function FocusView() {
  return (
    <div class="focus-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Keyboard Focus</strong>
          <div style={{ padding: 10 }}>
            Keyboard focus# Keyboard focus is initiated by the user and
            highlights an item when navigated using a keyboard. The keyboard
            focus state typically takes the component’s visual hover state and
            adds an additional indication, most commonly a 2 px blue ring around
            the component.
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
                border: "2px solid var(--color-white)",
                outline: "2px solid var(--color-hover-primary)",
                borderRadius: 25,
                boxSizing: "border-box",
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
                border: "0px solid var(--color-black)",
                outline: "2px solid var(--color-hover-primary)",
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
