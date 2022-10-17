import { Grid, ProgressCircle, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <Grid columns={1} gap={30}>
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
            <Grid columns={[1, 1]} gap={20}>
              <div
                style={{
                  flex: "none",
                  width: 100,

                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <em>{size}</em>
              </div>
              <div
                style={{
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <ProgressCircle size={size} value={33} />
              </div>
            </Grid>
          ))}
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Progress circles come in 3 sizes: small, medium (default), or large.
            These are available to fit various contexts. For example, the small
            progress circle can be used in place of an icon or in tight spaces,
            while the large one can be used for full-page loading.
          </p>
        </p>
      </div>
    </Grid>
  );
}
