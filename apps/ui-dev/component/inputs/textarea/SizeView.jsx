import { Grid, TextArea, VBox } from "@elf-framework/ui";

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
            padding: [20, 40],
            alignItems: "center",
          }}
        >
          {["small", "medium", "large", "extra-large"].map((size) => (
            <div style={{ display: "flex" }}>
              <div style={{ flex: "none", width: 100 }}>
                <em>{size}</em>
              </div>
              <TextArea
                label="Email address"
                size={size}
                value={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                rows={5}
              />
            </div>
          ))}
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Text fields come in four different sizes: small, medium, large, and
            extra-large. The medium size is the default and most frequently used
            option. Use the other sizes sparingly; they should be used to create
            a hierarchy of importance within the page.
          </p>
        </p>
      </div>
    </Grid>
  );
}
