import { Divider, Grid, VBox } from "@elf-framework/ui";

export function OrientationView() {
  return (
    <Grid columns={1} gap={30}>
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
          By default, the dividing line is horizontal and should be used to
          separate content vertically. Vertical dividers are used to separate
          content horizontally.
        </p>
      </div>
    </Grid>
  );
}
