import packageJSON from "@elf-framework/design-system/package.json";

import designPages from "../../constants/design-pages";
import { Layout } from "../Layout";

export function DesignLayout({ content, ...extraProps }) {
  return (
    <Layout
      {...extraProps}
      title="ELF Design"
      version={packageJSON.version}
      menu={designPages}
    >
      {content}
    </Layout>
  );
}
