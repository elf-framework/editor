import { Grid, RadioGroup, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [60, 40],
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div style={{ display: "flex" }}>
            <em style={{ display: "inline-block", width: 100 }}>Small</em>
            <RadioGroup
              direction="vertical"
              value={10}
              options={[
                { value: 10, label: "Travel" },
                { value: 20, label: "Music" },
                { value: 30, label: "Shopping" },
              ]}
              onChange={(e, values) => console.log(values)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <em style={{ display: "inline-block", width: 100 }}>Extra Large</em>
            <RadioGroup
              direction="vertical"
              value={10}
              size="extra-large"
              options={[
                { value: 10, label: "Travel" },
                { value: 20, label: "Music" },
                { value: 30, label: "Shopping" },
              ]}
              onChange={(e, values) => console.log(values)}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          Radio groups come in four different sizes: small, medium, large, and
          extra-large. The medium size is the default and most frequently used
          option. Use the other sizes sparingly; they should be used to create a
          hierarchy of importance within the page. The field label, radio
          buttons, and help text all conform to the same sizing option.
        </p>
      </div>
    </Grid>
  );
}
