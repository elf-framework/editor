import PaidOutlined from "@elf-framework/icon/PaidOutlined";
import { Grid, Tab, TabItem, VBox } from "@elf-framework/ui";

export function IconsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
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
            // flexDirection: "column",
            padding: [20, 20],
            justifyContent: "flex-start",
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
            <TabItem title="Prototype" key={2}></TabItem>
          </Tab>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Icons can be displayed in tab items. Icons should only be used in a
            tab item when absolutely necessary: when adding essential value and
            having a strong association with the label. Icons should not be used
            just as decoration. If the tab item does not have a visible label,
            it must still have a tooltip to disclose the label.
          </p>
        </p>
      </div>
    </Grid>
  );
}
