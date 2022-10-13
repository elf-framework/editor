import { Flex, Ghost, Grid, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        overflow: "auto",
        backgroundColor: "var(--color-gray-0)",
        padding: 40,
      }}
    >
      <div>
        <h1 style={{ marginBottom: 10 }}>Grid</h1>
        <Grid columns={3} style={{ gap: 10 }} rows={["100px", "100px"]}>
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
          <Ghost />
        </Grid>
        <h1>Flex</h1>
        <Flex style={{ gap: 10, justifyContent: "flex-start" }}>
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 140 }} />
        </Flex>
        <div>&nbsp;</div>
        <Flex wrap style={{ gap: 10, justifyContent: "flex-start" }}>
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 240, height: 50 }} />
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 40 }} />
          <Ghost style={{ width: 140 }} />
          <Ghost style={{ width: 150 }} />
          <Ghost style={{ width: 140 }} />
        </Flex>
      </div>
    </VBox>
  );
}
