import { Button, Grid, Toast, VBox } from "@elf-framework/ui";

export function ToolsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "40px 40px",
        }}
      >
        <div>
          <Toast
            direction="bottom-right"
            tools={[
              <Button variant="outline" shape="round">
                Action
              </Button>,
            ]}
          >
            Hello World yellow 234
          </Toast>
        </div>
      </VBox>
      <div>
        <p></p>
      </div>
    </Grid>
  );
}