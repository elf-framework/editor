import packageJSON from "@elf-framework/design-system/package.json";
import { isFunction } from "@elf-framework/sapa";

import menu from "../../constants/design-pages";
import { Layout } from "../Layout";

export function DesignLayout({ content, ...extraProps }) {
  return (
    <Layout
      {...extraProps}
      title="ELF Design"
      version={packageJSON.version}
      menu={menu}
    >
      {content.map((it) => {
        return isFunction(it) ? it(menu) : it;
      })}
    </Layout>
  );
}
