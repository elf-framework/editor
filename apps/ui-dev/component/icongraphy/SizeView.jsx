import AddCardFilled from "@elf-framework/icon/AddCardFilled";
import { Grid, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <div class="size-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Sizes</strong>
          <div style={{ padding: 10 }}>
            <p>
              The icons come in two sizes: 18 px for desktop scale and 22 px for
              mobile scale. All icons are pixel-snapped and optimized for their
              specific size. Learn more about the platform scale system.
            </p>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "var(--color-gray-0)",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              padding: "30px 10px",
              textAlign: "center",
              gap: 20,
            }}
          >
            <VBox style={{ gap: 10 }}>
              <em>Desktop (18px)</em>
              <div
                style={{
                  width: 100,
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--color-blue-0)",
                  border: `1px solid var(--color-blue-4)`,
                  backgroundImage:
                    "repeating-linear-gradient(to right, transparent, transparent 4.95%, var(--color-blue-4) 4.95%, var(--color-blue-4) calc(4.95% + 1px)), repeating-linear-gradient(to bottom, transparent, transparent 4.95%, var(--color-blue-4) 4.95%, var(--color-blue-4) calc(4.95% + 1px))",
                }}
              >
                <AddCardFilled width={100} height={100} />
              </div>
            </VBox>

            <VBox style={{ gap: 10 }}>
              <em>Mobile (22px)</em>
              <div
                style={{
                  width: 120,
                  height: 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "var(--color-blue-0)",
                  border: `1px solid var(--color-blue-4)`,
                  backgroundImage:
                    "repeating-linear-gradient(to right, transparent, transparent 4.45%, var(--color-blue-4) 4.45%, var(--color-blue-4) calc(4.45% + 1px)), repeating-linear-gradient(to bottom, transparent, transparent 4.45%, var(--color-blue-4) 4.45%, var(--color-blue-4) calc(4.45% + 1px))",
                }}
              >
                <AddCardFilled width={110} height={110} />
              </div>
            </VBox>
          </div>
        </div>
      </Grid>
    </div>
  );
}
