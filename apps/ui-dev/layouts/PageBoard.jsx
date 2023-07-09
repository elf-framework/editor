import { MarkdownPage } from "../component/MarkdownPage";
import LayoutManager from "./LayoutManager";
import "./PageBoard.scss";

export function PageBoard({ layout, page, filename, ...rest }) {
  const CurrentLayout = LayoutManager.get(layout || "SapaLayout");

  return (
    <CurrentLayout>
      {(menu) => {
        return (
          <div>
            <MarkdownPage
              page={page}
              filename={filename}
              menu={menu}
              {...rest}
            />
          </div>
        );
      }}
    </CurrentLayout>
  );
}
