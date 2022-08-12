import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { MainLayout } from "../../component/MainLayout";
import "./getting-started.scss";

function Main() {
  return (
    <MainLayout maxWidth={1200}>
      <div style={{ padding: "20px 10px" }}>My Content</div>
    </MainLayout>
  );
}

start(Main);
