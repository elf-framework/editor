import { Grid, Tab, TabItem, VBox } from "@elf-framework/ui";

export function OrientationView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 300,
        }}
      >
        <div
          style={{
            display: "flex",
            padding: [20, 40],
            height: 200,
          }}
        >
          <Tab activeKey={1} showIndicator>
            <TabItem title="Design" key={1}></TabItem>
            <TabItem title="Prototype" key={2}></TabItem>
            <TabItem title="Project" key={3}></TabItem>
          </Tab>
        </div>
        <div
          style={{
            display: "flex",
            padding: [20, 40],
            height: 200,
          }}
        >
          <Tab activeKey={1} orientation="vertical" showIndicator>
            <TabItem title="Design" key={1}></TabItem>
            <TabItem title="Prototype" key={2}></TabItem>
            <TabItem title="Project" key={3}></TabItem>
          </Tab>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Tabs can be either horizontal or vertical. By default, tabs are
            horizontal and should be used when horizontal space is limited.
          </p>
          <p>
            Vertical tabs should be used when horizontal space is more generous
            and when the list of sections is greater than can be presented to
            the user in a horizontal format. They can also be used as an anchor
            link experience when displaying shortcuts to sections of content on
            a single page. Rather than exposing a new tab view, the tab items
            can link to an on-page anchor.
          </p>
        </p>
      </div>
    </Grid>
  );
}
