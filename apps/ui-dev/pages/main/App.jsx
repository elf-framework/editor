import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { BlankLayout } from "../../layouts/BlankLayout";
import Page from "./page.mdx";
import "./page.scss";

function App() {
  return (
    <BlankLayout>
      <Page />
    </BlankLayout>
  );
}

start(App);
