import packageJSON from "@elf-framework/ui/package.json";

import uiPages from "../../constants/ui-pages";
import { Layout } from "../Layout";

export function UILayout({ content, ...extraProps }) {
  return (
    <Layout
      {...extraProps}
      title="ELF UI"
      version={packageJSON.version}
      menu={uiPages}
    >
      {content}
    </Layout>
  );
}
