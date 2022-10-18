import "@elf-framework/ui/style.css";

import { BlankLayout } from "../../layouts/BlankLayout";
import Page from "./page.mdx";
import "./page.scss";

export function AppBody() {
  const template = Page();

  return (
    <BlankLayout>
      <div>{template.children || template}</div>
    </BlankLayout>
  );
}
