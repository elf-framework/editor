import { Grid, Tag, VBox } from "@elf-framework/ui";

export function RemovableView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: [20, 40],
            height: 200,
            gap: 20,
          }}
        >
          <div>
            <em>Not removable</em>
            <div style={{ marginTop: 10 }}>
              <Tag>Traveling</Tag>
            </div>
          </div>

          <div>
            <em>Removable</em>
            <div style={{ marginTop: 10 }}>
              <Tag
                removable
                onClose={() => {
                  console.log("removed");
                }}
              >
                Traveling
              </Tag>
            </div>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Tags have the option to be removable or not. Removable tags have a
            small close (“x”) button.
          </p>
        </p>
      </div>
    </Grid>
  );
}
