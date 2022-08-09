import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { Layout } from "../../component/Layout";

start(function () {
  return (
    <Layout>
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          backgroundColor: "red",
        }}
      >
        <PanZoom>Hello World yellow 234</PanZoom>
      </div>
    </Layout>
  );
});
