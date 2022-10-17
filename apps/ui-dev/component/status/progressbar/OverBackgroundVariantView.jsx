import { Grid, ProgressBar, VBox } from "@elf-framework/ui";

export function OverBackgroundVariantView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-green-7)",
          padding: "30px 20px",
          fontSize: 13,
          height: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            padding: [20, 40],
            justifyContent: "center",
            alignItems: "flex-start",
            height: 200,
          }}
        >
          <div>
            <ProgressBar
              title="Loading data..."
              value={20}
              variant="dark"
              valueText={"20%"}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            When a progress bar needs to be placed on top of a colored
            background, use the over background variant. This progress bar uses
            a static white color regardless of the color theme. Make sure the
            background offers enough contrast for the progress bar to be
            legible.
          </p>
        </p>
      </div>
    </Grid>
  );
}
