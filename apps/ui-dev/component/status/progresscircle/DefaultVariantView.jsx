import { Grid, ProgressCircle, VBox } from "@elf-framework/ui";

export function DefaultVariantView() {
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
          <div style={{ display: "flex", gap: 100 }}>
            <ProgressCircle
              size="large"
              variant="primary"
              animated
              style={{ duration: "3s" }}
            />

            <ProgressCircle
              size="large"
              variant="primary"
              indeterminate
              style={{ duration: "3s" }}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Progress circles are used to visually show the progression of a
            system operation such as downloading, uploading, processing, etc. By
            default, progress circles have a blue fill that shows the progress.
          </p>
        </p>
      </div>
    </Grid>
  );
}
