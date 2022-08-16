import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import LayoutManager from "../../../component/LayoutManager";
import Page, { layout } from "./page.mdx";
import "./page.scss";

function Main() {
  const CurrentLayout = LayoutManager.get(layout || "MainLayout");

  return (
    <CurrentLayout maxWidth={1200}>
      <Page />
    </CurrentLayout>
  );
}

start(Main);
