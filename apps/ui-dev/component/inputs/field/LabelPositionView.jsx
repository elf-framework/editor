import { Field, Grid, InputEditor, VBox } from "@elf-framework/ui";

export function LabelPositionView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
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
            display: "flex",
            gap: 30,
            flexDirection: "column",
            padding: [20, 40],
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Field label="Email address">
            <InputEditor disabled />
          </Field>

          <Field label="Email address" position="horizontal">
            <InputEditor disabled />
          </Field>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            A label can be placed either on top or on the side of an input. This
            option affects the bounding box of the component to ensure proper
            alignment. Top labels are the default and are recommended because
            they work better with long copy, localization, and responsive
            layouts. Side labels are most useful when vertical space is limited.
          </p>
        </p>
      </div>
    </Grid>
  );
}
