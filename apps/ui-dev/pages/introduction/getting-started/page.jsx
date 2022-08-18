import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { MarkdownPage } from "../../../component/MarkdownPage";
import LayoutManager from "../../../layouts/LayoutManager";
import Page, { layout } from "./page.mdx";
import "./page.scss";

function Main() {
  const CurrentLayout = LayoutManager.get(layout || "MainLayout");

  return (
    <CurrentLayout>
      <MarkdownPage page={Page} />
    </CurrentLayout>
  );
}

start(Main);
