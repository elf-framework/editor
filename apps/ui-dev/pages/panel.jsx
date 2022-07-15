import AddChartFilled from "@elf-framework/icon/esm/AddChartFilled";
import { start } from "@elf-framework/sapa";
import { Button, Layout, Panel, TabStrip } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

start(() => {
  return (
    <div style="display: flex;">
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100vw;height:100vh;background-color: #f5f5f5">
        <Panel
          title={<Button>fdsafds</Button>}
          tools={[
            <Button>
              <AddChartFilled />)
            </Button>,
          ]}
          footer={<Button>Panel</Button>}
          style={{
            width: 300,
          }}
        >
          This is a panel.
        </Panel>
        <div>&nbsp;</div>
        <Panel
          title={"sample"}
          tools={[
            <Button>
              <AddChartFilled />
            </Button>,
          ]}
          footer={<Button>Panel</Button>}
          mode="stroke"
          style={{
            width: 300,
          }}
        >
          This is a panel.
        </Panel>
        <div>&nbsp;</div>
        <Panel
          title={"sample"}
          tools={[
            <Button>
              <AddChartFilled />
            </Button>,
          ]}
          footer={<Button>Panel</Button>}
          mode="stroke"
          style={{
            width: 300,
          }}
        >
          This is a panel.
        </Panel>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100vw;height:100vh;background-color: #f5f5f5">
        <TabStrip
          items={[
            { title: "Tab 1", selected: true, value: "tab-1" },
            { title: "Tab 2", value: "tab-2" },
            { title: "Tab 3", value: "tab-3" },
          ]}
          style={{
            width: 300,
          }}
          onChange={(e, item) => {
            console.log(e, item, item.selectedValue);
          }}
          tools={[<AddChartFilled />]}
        />
        <div>&nbsp;</div>
        <Panel
          title={"sample"}
          tools={[
            <Button>
              <AddChartFilled />
            </Button>,
          ]}
          footer={<Button>Panel</Button>}
          mode="stroke"
          style={{
            width: 300,
          }}
        >
          <Layout>
            <div>This is a panel.</div>
            <div>fdsafdsafdsfaadsf</div>
          </Layout>
          <Layout wrap={true} style={{ gap: 20 }}>
            <div
              style={{
                flex: "none",
                width: 50,
              }}
            >
              This is a panel.
            </div>
            <div>fdsafdsafdsfaadsf</div>
            <div>fdsafdsafdsfaadsf</div>
            <div>fdsafdsafdsfaadsf</div>
            <div>fdsafdsafdsfaadsf</div>
          </Layout>

          <Layout>
            <div>This is a panel.</div>
            <div>fdsafdsafdsfaadsf</div>
          </Layout>
        </Panel>
        <div>&nbsp;</div>
        <Panel
          title={"sample"}
          tools={[
            <Button>
              <AddChartFilled />
            </Button>,
          ]}
          footer={<Button>Panel</Button>}
          mode="stroke"
          style={{
            width: 300,
          }}
        >
          This is a panel.
        </Panel>
      </div>
    </div>
  );
});
