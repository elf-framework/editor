import AddChartFilled from "@elf-framework/icon/esm/AddChartFilled";
import { start } from "@elf-framework/sapa";
import { Button, Notification } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../component/Layout";

function Tools() {
  return (
    <>
      <Button onClick={() => console.log("action")}>Action</Button>
      <Button onClick={() => console.log("Dismiss")}>Dismiss</Button>
    </>
  );
}

start(function () {
  return (
    <Layout>
      <div>
        <Notification
          icon={<AddChartFilled />}
          content="Hello World"
          tools={<Tools />}
        />
        <Notification
          direction="top"
          icon={<AddChartFilled />}
          content="Hello World"
          tools={<Tools />}
        />
        <Notification
          direction="top-right"
          icon={<AddChartFilled />}
          content="Hello World"
          tools={<Tools />}
        />
        <Notification
          direction="left"
          icon={<AddChartFilled />}
          content="Hello World"
          tools={<Tools />}
        />
        <Notification
          direction="center"
          icon={<AddChartFilled />}
          content="Hello World"
          tools={<Tools />}
        />
        <Notification
          direction="right"
          icon={<AddChartFilled />}
          content="Hello World"
          tools={<Tools />}
        />
        <Notification
          direction="bottom-left"
          icon={<AddChartFilled />}
          content="Hello World"
          tools={<Tools />}
        />
        <Notification
          direction="bottom"
          icon={<AddChartFilled />}
          content="Hello World"
          tools={<Tools />}
        />
        <Notification
          direction="bottom-right"
          icon={<AddChartFilled />}
          content="Hello World"
          tools={<Tools />}
        />
      </div>
    </Layout>
  );
});
