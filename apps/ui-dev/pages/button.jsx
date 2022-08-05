import { start } from "@elf-framework/sapa";
import { Button, LinkButton } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../component/Layout";

start(function () {
  return (
    <Layout>
      <div>
        <h1>Type</h1>
        <div style="display: flex; align-items: center;">
          <div style={{ padding: 10 }}>
            <Button
              onClick={() =>
                this.setState({
                  value: 1,
                })
              }
            >
              Hello
            </Button>
            <div>Default</div>
          </div>
          <div style={{ padding: 10 }}>
            <Button type="primary">Hello</Button>
            <div>Primary</div>
          </div>
          <div style={{ padding: 10 }}>
            <Button type="primary" destructive={true}>
              Hello
            </Button>
            <div>Primary Destructive</div>
          </div>
          <div style={{ padding: 10 }}>
            <Button type="outline">Hello</Button>
            <div>Outline</div>
          </div>
          <div style={{ padding: 10 }}>
            <LinkButton>Link</LinkButton>
            <div>link</div>
          </div>
        </div>
      </div>
      <div>
        <h1>Size</h1>
        <div style="display: flex; align-items: center;">
          <div style={{ padding: 10 }}>
            <Button type="outline" size="large">
              Hello
            </Button>
            <div>large</div>
          </div>
          <div style={{ padding: 10 }}>
            <Button type="outline">medium</Button>
            <div>medium</div>
          </div>
          <div style={{ padding: 10 }}>
            <Button type="outline" size="small">
              small
            </Button>
            <div>small</div>
          </div>
        </div>
      </div>
      <div>
        <h1>Disabled</h1>
        <div style="display: flex; align-items: center;">
          <div style={{ padding: 10 }}>
            <Button disabled={true}>Disabled</Button>
            <div>Disabled</div>
          </div>
        </div>
      </div>
      <div>
        <h1>Shape</h1>
        <div style="display: flex; align-items: center;">
          <div style={{ padding: 10 }}>
            <Button type="primary" shape="round">
              Primary
            </Button>
            <div>Round</div>
          </div>
          <div style={{ padding: 10 }}>
            <Button type="primary" shape="circle">
              C
            </Button>
            <div>Circle</div>
          </div>
        </div>
      </div>
      <div>
        <h1>Style</h1>
        <div style="display:flex">
          <div style={{ padding: 10 }}>
            <Button style={{ borderColor: "red" }}>Primary</Button>
            <div>Border Color</div>
          </div>
          <div style={{ padding: 10 }}>
            <Button type="primary" style={{ backgroundColor: "red" }}>
              Primary
            </Button>
            <div>Background Color</div>
          </div>
        </div>
      </div>
    </Layout>
  );
});
