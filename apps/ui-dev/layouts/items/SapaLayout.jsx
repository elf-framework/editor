import { isFunction } from "@elf-framework/sapa";

import { SapaVersion } from "../../component/Version";
import menu from "../../constants/sapa-pages";
import { Layout } from "../Layout";

export function SapaLayout({ content, ...extraProps }) {
  return (
    <Layout {...extraProps} title="Sapa" version={<SapaVersion />} menu={menu}>
      {content.map((it) => {
        return isFunction(it) ? it(menu) : it;
      })}
    </Layout>
  );
}
