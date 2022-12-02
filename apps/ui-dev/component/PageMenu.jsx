import { useEffect } from "@elf-framework/sapa";
import { Sidebar } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import "./PageMenu.scss";

export function PageMenu({ menu = [], header, footer }) {
  const { href, pathname } = location;

  useEffect(() => {
    setTimeout(() => {
      const el = document.querySelector(".elf--sidebar-item.selected");
      if (el) {
        el.scrollIntoView();
      }
    }, 100);
  }, [href]);

  return (
    <Sidebar
      compact
      items={menu}
      header={header}
      footer={footer}
      hasSelected={(it) => {
        return it.link === pathname;
      }}
    />

    // <View>
    //   {menu.map((page) => {
    //     if (typeof page === "string") {
    //       return (
    //         <h1 data-depth={depth} class="page-title">
    //           {page}
    //         </h1>
    //       );
    //     } else if (page.type === "group") {
    //       return (
    //         <div>
    //           <h1 data-depth={depth} class="page-title">
    //             {page.title}
    //           </h1>
    //           <PageMenu menu={page.items || []} data-depth={depth + 1} />
    //         </div>
    //       );
    //     } else {
    //       return [
    //         <div
    //           class={classnames("page-menu", {
    //             selected: pathname === page.link,
    //             disabled: page.disabled,
    //           })}
    //           data-depth={depth}
    //           id={pageId(page?.link)}
    //           data-has-items={Boolean(page.items?.length)}
    //         >
    //           <a href={page.link}>{page.title}</a>
    //         </div>,
    //         page.items && <PageMenu menu={page.items} depth={depth + 1} />,
    //       ];
    //     }
    //   })}
    // </View>
  );
}
