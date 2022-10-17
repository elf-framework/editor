import { Animation, Grid, ProgressCircle, VBox } from "@elf-framework/ui";

export function SpinView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "30px 100px",
          }}
        >
          <Animation.spin duration="2s">
            <ProgressCircle size="large" variant="primary" value={90} />
          </Animation.spin>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            When part of the page is waiting for asynchronous data or during a
            rendering process, an appropriate loading animation can effectively
            alleviate users' inquietude.
          </p>
        </p>
      </div>
    </Grid>
  );
}
