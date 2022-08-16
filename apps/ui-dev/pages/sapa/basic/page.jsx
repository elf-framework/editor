import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";
import { EditArea } from "../../../component/EditArea";

import LayoutManager from "../../../layouts/LayoutManager";
import Page, { layout, filename } from "./page.mdx";
import "./page.scss";

function Main() {
  const CurrentLayout = LayoutManager.get(layout || "SapaLayout");

  return (
    <CurrentLayout maxWidth={1200}>
      <EditArea filename={filename}>
        <Page />
      </EditArea>
    </CurrentLayout>
  );
}

start(Main);
