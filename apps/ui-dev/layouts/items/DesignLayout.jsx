import { isFunction } from "@elf-framework/sapa";

import { DesignSystemVersion } from "../../component/Version";
import menu from "../../constants/design-pages";
import { Layout } from "../Layout";

export function DesignLayout({ content, ...extraProps }) {
  return (
    <Layout
      {...extraProps}
      title="Design"
      version={<DesignSystemVersion />}
      menu={menu}
    >
      {content.map((it) => {
        return isFunction(it) ? it(menu) : it;
      })}
    </Layout>
  );
}
