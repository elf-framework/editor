import packageJSON from "@elf-framework/sapa/package.json";

import sapaPages from "../constants/sapa-pages";
import { Layout } from "./Layout";

export function SapaLayout({ content, ...extraProps }) {
  return (
    <Layout
      {...extraProps}
      title="ELF Sapa"
      version={packageJSON.version}
      menu={sapaPages}
    >
      {content}
    </Layout>
  );
}
