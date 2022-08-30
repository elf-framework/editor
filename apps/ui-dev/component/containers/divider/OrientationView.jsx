import { Divider, Flex, Grid, VBox } from "@elf-framework/ui";

export function OrientationView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "40px 40px",
          height: 200,
        }}
      >
        <Grid
          columns={2}
          style={{
            gap: 30,
          }}
        >
          <VBox
            style={{
              gap: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Divider size="small" orientation="horizontal" />
            <em>Horizontal</em>
          </VBox>
          <VBox style={{ alignItems: "center", gap: 10 }}>
            <Divider
              size="small"
              orientation="vertical"
              style={{ alignSelf: "center", height: 100 }}
            />
            <em>Vertical</em>
          </VBox>
        </Grid>
      </VBox>
      <div>
        <p>
          By default, dividers are horizontal and should be used for separating
          content vertically. The vertical divider is used to separate content
          horizontally.
        </p>
      </div>
    </Grid>
  );
}
