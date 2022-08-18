import packageJSON from "@elf-framework/base-editor/package.json";

import editorPages from "../../constants/editor-pages";
import { Layout } from "../Layout";

export function EditorLayout({ content, ...extraProps }) {
  return (
    <Layout
      {...extraProps}
      title="ELF Editor"
      version={packageJSON.version}
      menu={editorPages}
    >
      {content}
    </Layout>
  );
}
