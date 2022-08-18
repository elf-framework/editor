import packageJSON from "@elf-framework/icon/package.json";

import iconPages from "../../constants/icon-pages";
import { Layout } from "../Layout";

export function IconLayout({ content, ...extraProps }) {
  return (
    <Layout
      {...extraProps}
      title="ELF Icon"
      version={packageJSON.version}
      menu={iconPages}
    >
      {content}
    </Layout>
  );
}
