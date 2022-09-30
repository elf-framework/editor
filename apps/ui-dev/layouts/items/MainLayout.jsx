import { isFunction } from "@elf-framework/sapa";

import menu from "../../constants/main-pages";
import { Layout } from "../Layout";

export function MainLayout({ content, ...extraProps }) {
  return (
    <Layout {...extraProps} title="ELF" menu={menu}>
      {content.map((it) => {
        return isFunction(it) ? it(menu) : it;
      })}
    </Layout>
  );
}
