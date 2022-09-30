import { Field, Grid, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
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
            padding: [20, 40],
            alignItems: "center",
          }}
        >
          {["small", "medium", "large", "extra-large"].map((size) => (
            <div style={{ display: "flex" }}>
              <div style={{ flex: "none", width: 100 }}>
                <em>{size}</em>
              </div>
              <Field label={"Label"} size={size} required={true} />
            </div>
          ))}
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Help text comes in four different sizes: small, medium, large, and
            extra-large. The medium size is the default and most frequent
            option. Use the other sizes sparingly and pair them with components
            of the same size to respect the built-in hierarchy.
          </p>
        </p>
      </div>
    </Grid>
  );
}
