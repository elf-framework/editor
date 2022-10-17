import { Grid, Tab, TabItem, VBox } from "@elf-framework/ui";

export function QuietView() {
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
            padding: [20, 0],
            alignItems: "center",
          }}
        >
          <div>
            <em>Not quiet</em>
            <Tab activeKey={1}>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3}></TabItem>
            </Tab>
          </div>
          <div>
            <em>Quiet</em>
            <Tab activeKey={1} quiet>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3}></TabItem>
            </Tab>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            By default, tabs have a divider that spans across all tab items.
            This style works as a way to anchor them to the page. These types of
            tabs are best used at the top of a page, as a top-level navigation.
          </p>
          <p>
            Alternatively, quiet tabs have no visible divider across the tab
            items apart from the one that shows the selected tab item. These
            should be used as sub-level navigation or for containers.
          </p>
        </p>
      </div>
    </Grid>
  );
}
