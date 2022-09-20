import { CheckboxGroup, Grid, VBox } from "@elf-framework/ui";

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
            gap: 30,
          }}
        >
          <div style={{ display: "flex" }}>
            <em style={{ display: "inline-block", width: 100 }}>Small</em>
            <CheckboxGroup
              direction="vertical"
              value={[10]}
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
            <CheckboxGroup
              direction="vertical"
              value={[10]}
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
          A popover’s width and height can be customized appropriately for its
          context.
        </p>
      </div>
    </Grid>
  );
}
