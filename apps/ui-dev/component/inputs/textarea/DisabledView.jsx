import { Grid, TextArea, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <Grid columns={1} style={{ padding: [0, 10] }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 20,
              alignItems: "center",
            }}
          >
            <TextArea
              label="Email address"
              disabled
              value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              rows={5}
            />
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          A text field in a disabled state shows that an input field exists, but
          is not available in that circumstance. This can be used to maintain
          layout continuity and communicate that a field may become available
          later.
        </p>
      </div>
    </Grid>
  );
}
