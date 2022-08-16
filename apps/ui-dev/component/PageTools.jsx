import { Tools } from "@elf-framework/ui";

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
                  items: [
                    { type: "group", title: "Docs" },
                    {
                      type: "link",
                      title: "Introduction",
                      link: "/pages/introduction/",
                    },
                    {
                      type: "link",
                      title: "Sapa",
                      link: "/pages/sapa/",
                    },
                    {
                      type: "link",
                      title: "Design",
                      link: "/pages/design-system/",
                    },
                    {
                      type: "link",
                      title: "UI Component",
                      link: "/pages/ui-component/",
                    },
                    {
                      type: "link",
                      title: "Icon",
                      link: "/pages/icon/",
                    },
                    {
                      type: "link",
                      title: "Editor",
                      link: "/pages/editor/",
                    },
                  ],
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
        <a href="/pages/introduction/">Introduction</a>
        <span class="divider"></span>
        <a href="/pages/sapa/">Sapa</a>
        <span class="divider"></span>
        <a href="/pages/design-system/">Design</a>
        <span class="divider"></span>
        <a href="/pages/ui-component/">UI Component</a>
        <span class="divider"></span>
        <a href="/pages/icon/">Icon</a>
        <span class="divider"></span>
        <a href="/pages/editor/">Editor</a>
      </div>
    </div>
  );
}
