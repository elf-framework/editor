import mainPages from "../constants/main-pages";
import { Layout } from "./Layout";

export function MainLayout({ content, ...extraProps }) {
  return (
    <Layout {...extraProps} title="ELF" menu={mainPages}>
      {content}
    </Layout>
  );
}
