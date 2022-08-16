import { start } from "@elf-framework/sapa";

import { DefaultLayout } from "../../layouts/Layout";
import Page from "./page.mdx";
import "./page.scss";

function App() {
  return (
    <DefaultLayout>
      <Page />
    </DefaultLayout>
  );
}

start(App);
