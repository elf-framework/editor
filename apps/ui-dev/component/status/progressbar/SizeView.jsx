import { Grid, ProgressBar, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
            padding: [20, 70],
            alignItems: "flex-start",
          }}
        >
          {["small", "medium", "large", "extra-large"].map((size) => (
            <div style={{ display: "flex" }}>
              <div style={{ flex: "none", width: 100 }}>
                <em>{size}</em>
              </div>
              <ProgressBar title={"Loading data..."} size={size} value={33} />
            </div>
          ))}
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Badges come in four different sizes: small, medium, large, and
            extra-large. The small size is the default and most frequently used
            option. Use the other sizes sparingly to create a hierarchy of
            importance on a page.
          </p>
        </p>
      </div>
    </Grid>
  );
}
