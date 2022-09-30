import { MarkdownPage } from "../component/MarkdownPage";
import LayoutManager from "./LayoutManager";

export function PageBoard({ layout, page, filename }) {
  const CurrentLayout = LayoutManager.get(layout || "SapaLayout");

  return (
    <CurrentLayout>
      {(menu) => {
        return <MarkdownPage page={page} filename={filename} menu={menu} />;
      }}
    </CurrentLayout>
  );
}
