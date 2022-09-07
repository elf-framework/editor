import { Button, Grid, ProgressBar, VBox } from "@elf-framework/ui";

export function LabelView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
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
            <ProgressBar
              title="Loading data..."
              value={20}
              valueText={<Button disabled />}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Progress bars should have a label that gives context about the
            operation being performed. Use an ellipsis at the end of the label
            text to communicate that the process is in progress. In rare cases
            where context is sufficient and an accessibility expert has reviewed
            the design, the label could be undefined. These progress bars should
            still include an aria-label in HTML (depending on the context,
            “aria-label” or “aria-labelledby”). The label is always placed above
            the track.
          </p>
        </p>
      </div>
    </Grid>
  );
}
