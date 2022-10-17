import { Button, Grid, ProgressBar, VBox } from "@elf-framework/ui";

export function ValueView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
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
            <ProgressBar title={<Button disabled />} value={33} />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Progress bars can have a value label that gives detailed information
            about the progress (e.g. "60%" or "2 of 8"). This value label works
            alongside the label and should not be displayed if the label itself
            is not displayed. It should also not be displayed if the progress is
            indeterminate. Similar to the label, the value label is always
            placed above the track.
          </p>
        </p>
      </div>
    </Grid>
  );
}
