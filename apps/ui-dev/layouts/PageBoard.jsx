import { MarkdownPage } from "../component/MarkdownPage";
import LayoutManager from "./LayoutManager";

export function PageBoard({ layout, page, filename }) {
  const CurrentLayout = LayoutManager.get(layout || "SapaLayout");

  return (
    <CurrentLayout>
      <MarkdownPage page={page} filename={filename} />
    </CurrentLayout>
  );
}
