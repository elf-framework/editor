import { Grid, TextArea, VBox } from "@elf-framework/ui";

export function ResizableView() {
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
              resizable
              value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              rows={5}
            />
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          Text areas can either be a static size or can be resizable with a drag
          icon in the bottom right corner. The drag icon should be hidden if the
          fixed variant is turned off, or if the text area should not be
          resizable.
        </p>
      </div>
    </Grid>
  );
}
