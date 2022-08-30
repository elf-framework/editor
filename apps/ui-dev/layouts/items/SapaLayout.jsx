import { isFunction } from "@elf-framework/sapa";
import packageJSON from "@elf-framework/sapa/package.json";

import menu from "../../constants/sapa-pages";
import { Layout } from "../Layout";

export function SapaLayout({ content, ...extraProps }) {
  return (
    <Layout
      {...extraProps}
      title="ELF Sapa"
      version={packageJSON.version}
      menu={menu}
    >
      {content.map((it) => {
        return isFunction(it) ? it(menu) : it;
      })}
    </Layout>
  );
}
