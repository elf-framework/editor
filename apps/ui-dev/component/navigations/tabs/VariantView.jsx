import { Grid, Tab, TabItem, VBox } from "@elf-framework/ui";

export function VariantView() {
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
            flexDirection: "column",
            padding: [20, 0],
            alignItems: "center",
          }}
        >
          <div>
            <em>Not emphasized</em>
            <Tab activeKey={1} showIndicator>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3}></TabItem>
            </Tab>
          </div>
          <div>
            <em>Emphasized - primary</em>
            <Tab activeKey={1} variant={"primary"} showIndicator>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3}></TabItem>
            </Tab>
          </div>

          <div>
            <em>Emphasized - danger</em>
            <Tab activeKey={1} variant={"danger"} showIndicator>
              <TabItem title="Design" key={1}></TabItem>
              <TabItem title="Prototype" key={2}></TabItem>
              <TabItem title="Project" key={3}></TabItem>
            </Tab>
          </div>
          <div
            style={{ backgroundColor: "black", color: "white", padding: 10 }}
          >
            <em>Emphasized - dark</em>
            <Tab activeKey={1} variant={"dark"} showIndicator>
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
            By default, tabs are not emphasized. This is optimal for when the
            tabs component is not the core part of an interface.
          </p>
          <p>
            Emphasized tabs have blue text for the selected state for visual
            prominence and to draw more attention to them. This is optimal for
            when the selection should call attention, such as the main
            navigation for a website.
          </p>
          <p>
            Emphasis is expressed as a Variant.
            <ul>
              <li>primary</li>
              <li>success</li>
              <li>warning</li>
              <li>danger</li>
              <li>info</li>
              <li>dark</li>
            </ul>
          </p>
        </p>
      </div>
    </Grid>
  );
}
