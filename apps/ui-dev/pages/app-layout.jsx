import { start } from "@elf-framework/sapa";
import { AppLayout, AppLayoutItem, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../component/Layout";

function Main() {
  return (
    <Layout>
      <h1>App Layout(top, left, right, bottom, center) with resizable</h1>
      <View
        position="relative"
        width={800}
        height={600}
        border="1px solid #ececec"
      >
        <AppLayout>
          <AppLayoutItem direction="top" height={40}></AppLayoutItem>
          <AppLayoutItem
            direction="left"
            width={280}
            resizable={true}
            onResize={(width, height) => {
              console.log("onResize", width, height);
            }}
            onResizeEnd={(width, height) => {
              console.log("onResizeEnd", width, height);
            }}
          ></AppLayoutItem>
          <AppLayoutItem
            direction="right"
            width={300}
            resizable={true}
            onResize={(width, height) => {
              console.log(width, height);
            }}
          ></AppLayoutItem>
          <AppLayoutItem direction="center"></AppLayoutItem>
        </AppLayout>
      </View>
    </Layout>
  );
}

start(Main);
