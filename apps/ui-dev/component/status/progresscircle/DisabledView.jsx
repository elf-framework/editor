import { Badge, Grid, VBox } from "@elf-framework/ui";

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 50,
            padding: [0, 40],
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Badge disabled>Traveling</Badge>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          A badge in a disabled state shows that it exists, but is not available
          in that circumstance. This can be used to maintain layout continuity
          and communicate that a badge may become available later. Badges should
          only be able to be disabled if they are interactive.
        </p>
      </div>
    </Grid>
  );
}
