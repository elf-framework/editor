import { Tools } from "@elf-framework/ui";

import mainMenus from "../constants/main-menus";
import "./PageTools.scss";

export function PageTools({ menu }) {
  return (
    <div class="page-tools">
      <div class="sm">
        <Tools
          items={[
            {
              type: "menu",
              title: "Menu",
              items: [
                {
                  type: "item",
                  title: "Documents",
                  items: [{ type: "group", title: "Docs" }, ...mainMenus],
                },
                "-",
                ...menu.map((it) => {
                  if (typeof it === "string") {
                    return { type: "group", title: it };
                  }
                  return {
                    type: "link",
                    ...it,
                  };
                }),
              ],
            },
          ]}
        />
      </div>
      <div class="lg">
        {mainMenus.map((it, index) => {
          if (index === 0) {
            return <a href={it.link}>{it.title}</a>;
          }

          return [
            <span class="divider"></span>,
            <a href={it.link}>{it.title}</a>,
          ];
        })}
      </div>
    </div>
  );
}
