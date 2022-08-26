import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import { Grid, VBox } from "@elf-framework/ui";

export function ColorView() {
  return (
    <div class="color-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Color</strong>
          <div style={{ padding: 10 }}>
            <p>
              The icons are monochromatic. The icon color varies depending on
              the interactive state (e.g., default, hover, disabled) and the
              color theme.
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "var(--color-gray-0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px 10px",
              textAlign: "center",
            }}
          >
            <VBox style={{ gap: 10 }}>
              <Grid
                columns={3}
                style={{
                  width: 200,
                  padding: "0px 20px",
                }}
              >
                <span>Default</span>
                <span>Hover</span>
                <span>Disabled</span>
              </Grid>
              <Grid
                columns={3}
                style={{
                  width: 200,
                  padding: "10px 20px",
                  borderRadius: 4,
                }}
              >
                <span style={{ color: "var(--color-gray-7)" }}>
                  <AddCardFilled width={40} height={40} />
                </span>
                <span style={{ color: "var(--color-black)" }}>
                  <AddCardFilled width={40} height={40} />
                </span>
                <span style={{ color: "var(--color-text-disabled)" }}>
                  <AddCardFilled width={40} height={40} />
                </span>
              </Grid>
              <Grid
                columns={3}
                style={{
                  width: 200,
                  padding: "10px 20px",
                  backgroundColor: "var(--color-black)",
                  color: "var(--color-white)",
                  borderRadius: 4,
                }}
              >
                <span style={{ color: "var(--color-gray-3)" }}>
                  <AddCardFilled width={40} height={40} />
                </span>
                <span style={{ color: "var(--color-white)" }}>
                  <AddCardFilled width={40} height={40} />
                </span>
                <span style={{ color: "var(--color-text-disabled)" }}>
                  <AddCardFilled width={40} height={40} />
                </span>
              </Grid>
            </VBox>
          </div>
        </div>
      </Grid>
    </div>
  );
}
