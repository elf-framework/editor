import { start } from "@elf-framework/sapa";

import { DefaultLayout } from "../../layouts/DefaultLayout";
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
