import { isFunction } from "@elf-framework/sapa";

import { Layout } from "../Layout";

import { EditorVersion } from "~/component/Version";
import menu from "~/constants/base-editor-pages";

export function BaseEditorLayout({ content, ...extraProps }) {
  return (
    <Layout
      {...extraProps}
      title="ELF Editor"
      version={<EditorVersion />}
      menu={menu}
    >
      {content.map((it) => {
        return isFunction(it) ? it(menu) : it;
      })}
    </Layout>
  );
}
