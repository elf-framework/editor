import { Grid, Tag, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
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
            <Tag
              disabled
              removable
              onClose={() => {
                console.log("removed");
              }}
            >
              Traveling
            </Tag>
          </div>
          <div style={{ textAlign: "center" }}>
            <Tag
              disabled
              removable
              onClose={() => {
                console.log("removed");
              }}
            >
              Products
            </Tag>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          A tag in a disabled state shows that a tag exists, but is not
          available in that circumstance. This can be used to maintain layout
          continuity and communicate that a tag may become available later.
        </p>
      </div>
    </Grid>
  );
}
