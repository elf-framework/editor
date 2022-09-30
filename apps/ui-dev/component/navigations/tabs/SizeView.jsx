import { Grid, Tab, TabItem, VBox } from "@elf-framework/ui";

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
            padding: [20, 0],
            alignItems: "center",
          }}
        >
          {["small", "medium", "large", "extra-large"].map((size) => (
            <div style={{ display: "flex" }}>
              <div style={{ flex: "none", width: 100 }}>
                <em>{size}</em>
              </div>
              <Tab
                activeKey={1}
                size={size}
                showIndicator
                style={{ width: 240 }}
              >
                <TabItem title="Design" key={1}></TabItem>
                <TabItem title="Prototype" key={2}></TabItem>
                <TabItem title="Project" key={3}></TabItem>
              </Tab>
            </div>
          ))}
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Tabs come in four different sizes: small, medium, large, and
            extra-large. The medium size is the default and most frequently used
            option. Use the other sizes sparingly; they should be used to create
            a hierarchy of importance within the page.
          </p>
        </p>
      </div>
    </Grid>
  );
}
