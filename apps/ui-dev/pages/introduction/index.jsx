import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import LayoutManager from "../../component/LayoutManager";
import Index, { layout } from "./index.mdx";
import "./index.scss";

function Main() {
  const CurrentLayout = LayoutManager.get(layout || "MainLayout");

  return (
    <CurrentLayout maxWidth={1200}>
      <Index title={"blue"} />
    </CurrentLayout>
  );
}

start(Main);
