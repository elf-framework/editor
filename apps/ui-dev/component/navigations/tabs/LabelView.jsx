import { Grid, Tab, TabItem, VBox } from "@elf-framework/ui";

export function LabelView() {
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
            gap: 30,
            // padding: [20, 40],
            justifyContent: "center",
            alignItems: "flex-start",
            // height: 200,
          }}
        >
          <Tab activeKey={1}>
            <TabItem title="Design" key={1}></TabItem>
            <TabItem title="Prototype" key={2}></TabItem>
            <TabItem title="Project" key={3}></TabItem>
          </Tab>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Tab items should have a label for accessibility. If a label isn’t
            present, it must include an icon and becomes an icon-only tab item.
          </p>
        </p>
      </div>
    </Grid>
  );
}
