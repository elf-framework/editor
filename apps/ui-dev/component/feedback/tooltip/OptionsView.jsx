import { Grid, Tooltip, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [50, 40],
          height: 150,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip placement="top" message={"label"} show></Tooltip>
        </div>
      </VBox>
      <div>
        <p>
          All tooltips have a label. The label communicates the contextual help
          or information about specific components when a user hovers over or
          focuses on them.
        </p>
      </div>
    </Grid>
  );
}
