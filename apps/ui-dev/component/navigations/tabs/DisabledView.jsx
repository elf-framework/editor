import PaidOutlined from "@elf-framework/icon/PaidOutlined";
import { Grid, Tab, TabItem, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <Grid columns={1} style={{ padding: [0, 10] }}>
          <div
            style={{
              display: "flex",
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tab activeKey={1}>
              <TabItem
                title={
                  <span>
                    <PaidOutlined /> Design
                  </span>
                }
                key={1}
              ></TabItem>
              <TabItem title="Prototype" key={2} disabled></TabItem>
            </Tab>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          A tab item in a disabled state shows that the tab item exists, but is
          not available in that circumstance. This state can be used to maintain
          layout continuity and to communicate that the tab item may become
          available later.
        </p>
      </div>
    </Grid>
  );
}
