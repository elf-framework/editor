import { Grid, Tab, TabItem, VBox } from "@elf-framework/ui";

export function TabItemView() {
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
          {[
            "underline",
            "button",
            "group",
            "round-group",
            "block",
            "classic",
          ].map((stripType) => {
            return (
              <div>
                <Tab activeKey={1} stripType={stripType}>
                  <TabItem title="Design" key={1}>
                    Design Content width {stripType}
                  </TabItem>
                  <TabItem title="Prototype" key={2}>
                    Prototype Content width {stripType}
                  </TabItem>
                  <TabItem title="Project" key={3}>
                    Project Content width {stripType}
                  </TabItem>
                </Tab>
              </div>
            );
          })}
        </div>
      </VBox>
      <div>
        <p>
          <p>Content can be expressed for each tab.</p>
        </p>
      </div>
    </Grid>
  );
}
