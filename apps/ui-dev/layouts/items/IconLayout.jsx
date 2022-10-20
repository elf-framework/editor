import { isFunction } from "@elf-framework/sapa";

import { IconVersion } from "../../component/Version";
import menu from "../../constants/icon-pages";
import { Layout } from "../Layout";

export function IconLayout({ content, ...extraProps }) {
  return (
    <Layout {...extraProps} title="Icon" version={<IconVersion />} menu={menu}>
      {content.map((it) => {
        return isFunction(it) ? it(menu) : it;
      })}
    </Layout>
  );
}
