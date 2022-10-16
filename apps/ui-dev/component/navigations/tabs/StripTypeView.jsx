import { useState } from "@elf-framework/sapa";
import { Grid, Tab, TabItem, TabStrip, VBox } from "@elf-framework/ui";

export function StripTypeView() {
  const [selectedKey, setSelectedKey] = useState(1);

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
                <div style={{ paddingBottom: 10 }}>{stripType}</div>
                <Tab activeKey={1} stripType={stripType}>
                  <TabItem title="Design" key={1}></TabItem>
                  <TabItem title="Prototype" key={2}></TabItem>
                  <TabItem title="Project" key={3}></TabItem>
                </Tab>
              </div>
            );
          })}

          <div>
            <div style={{ paddingBottom: 10 }}>Only tabstrip</div>
            <TabStrip
              // stripType={"classic"}
              activeKey={selectedKey}
              items={[
                {
                  key: 1,
                  title: "Design",
                  onClick: () => {
                    setSelectedKey(1);
                  },
                },
                {
                  key: 2,
                  title: "Prototype",
                  onClick: () => {
                    setSelectedKey(2);
                  },
                },
                {
                  key: 3,
                  title: "Project",
                  onClick: () => {
                    setSelectedKey(3);
                  },
                },
              ]}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            A tabstrip can be expressed in various forms.
            <ul>
              <li>underline</li>
              <li>button</li>
              <li>group</li>
              <li>round-group</li>
            </ul>
          </p>
        </p>
      </div>
    </Grid>
  );
}
