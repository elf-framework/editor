import "@elf-framework/ui/style.css";

import { BlankLayout } from "../../layouts/items/BlankLayout";
import Page from "./index.mdx";

export function AppBody() {
  const template = Page();

  return (
    <BlankLayout>
      <div>{template.children || template}</div>
    </BlankLayout>
  );
}
