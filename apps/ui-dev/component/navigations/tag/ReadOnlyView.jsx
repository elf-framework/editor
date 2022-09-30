import { Grid, Tag, VBox } from "@elf-framework/ui";

export function ReadOnlyView() {
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
              readOnly
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
              readOnly
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
          Tags have a read-only option for when content in the disabled state
          still needs to be shown. This allows for content to be copied, but not
          interacted with or changed.
        </p>
      </div>
    </Grid>
  );
}
