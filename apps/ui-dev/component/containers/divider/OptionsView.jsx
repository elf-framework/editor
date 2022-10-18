import { Divider, Flex, Grid, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            gap: 30,
            flexDirection: "column",
            width: 300,
          }}
        >
          <Flex style={{ gap: 30 }}>
            <em>Small</em>
            <Divider size="small" />
          </Flex>
          <Flex style={{ gap: 30 }}>
            <em>Medium</em>
            <Divider size="medium" />
          </Flex>
          <Flex style={{ gap: 30 }}>
            <em>Large</em>
            <Divider size="large" />
          </Flex>
        </div>
      </VBox>
    </Grid>
  );
}
