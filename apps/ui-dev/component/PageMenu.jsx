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
      items={menu}
      header={header}
      footer={footer}
      hasSelected={(it) => {
        return it.link === pathname;
      }}
    />
  );
}
