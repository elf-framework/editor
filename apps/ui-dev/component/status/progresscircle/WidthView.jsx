import { Button, Grid, ProgressBar, VBox } from "@elf-framework/ui";

export function WidthView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 200,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
            padding: [20, 40],
            justifyContent: "center",
            alignItems: "flex-start",
            height: 200,
          }}
        >
          <div>
            <ProgressBar
              title={<Button disabled />}
              value={33}
              style={{
                width: 200,
              }}
            />
          </div>

          <div>
            <ProgressBar
              title={<Button disabled />}
              value={33}
              style={{
                width: 240,
              }}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            The width of a progress bar can be customized appropriately for its
            context. The default width is size-2400 (192 px on desktop and 240
            px on mobile).
          </p>
        </p>
      </div>
    </Grid>
  );
}
