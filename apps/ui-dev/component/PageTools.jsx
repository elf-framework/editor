import DarkModeFilled from "@elf-framework/icon/DarkModeFilled";
import LightModeFilled from "@elf-framework/icon/LightModeFilled";
import { classnames, useEffect, useState } from "@elf-framework/sapa";
import {
  Button,
  IconButton,
  RoundButton,
  Switch,
  Tools,
} from "@elf-framework/ui";

import mainMenus from "../constants/main-menus";
import "./PageTools.scss";

export function PageTools({ menu }) {
  const pathname = location.pathname;
  const mode = localStorage.getItem("view-mode") || "light";
  const [viewMode, setViewMode] = useState(mode);

  useEffect(() => {
    const mode = localStorage.getItem("view-mode") || "light";

    if (mode === "light") {
      document.body.classList.toggle("theme-dark", false);
    } else {
      document.body.classList.toggle("theme-dark", true);
    }
  }, []);

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
                    selected: pathname.startsWith(it.category),
                    ...it,
                  };
                }),
              ],
            },
          ]}
        />
      </div>
      <div class="lg">
        <div>
          {mainMenus.map((it, index) => {
            if (index === 0) {
              return <a href={it.link}>{it.title}</a>;
            }

            const selected = pathname.startsWith(it.category);

            return [
              <span class="divider"></span>,
              <a
                href={it.link}
                class={classnames({
                  selected,
                })}
              >
                {it.title}
              </a>,
            ];
          })}
        </div>
        <div style={{ justifyContent: "flex-end" }}>
          {mode === "dark" ? (
            <RoundButton
              iconOnly
              quiet
              variant="dark"
              onClick={() => {
                setViewMode("light");
                localStorage.setItem("view-mode", "light");
                document.body.classList.toggle("theme-dark", false);
              }}
            >
              <DarkModeFilled />
            </RoundButton>
          ) : (
            <RoundButton
              iconOnly
              quiet
              onClick={() => {
                setViewMode("dark");
                localStorage.setItem("view-mode", "dark");
                document.body.classList.toggle("theme-dark", true);
              }}
            >
              <LightModeFilled />
            </RoundButton>
          )}
        </div>
      </div>
    </div>
  );
}
