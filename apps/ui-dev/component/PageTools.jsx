import DarkModeFilled from "@elf-framework/icon/DarkModeFilled";
import LightModeFilled from "@elf-framework/icon/LightModeFilled";
import {
  classnames,
  useEmit,
  useState,
  useSubscribe,
} from "@elf-framework/sapa";
import { RoundButton, Tools } from "@elf-framework/ui";

import mainMenus from "../constants/main-menus";
import "./PageTools.scss";

export function PageTools({ menu }) {
  const pathname = location.pathname;
  const mode = localStorage.getItem("view-mode") || "light";
  const [viewMode, setViewMode] = useState(mode);

  useSubscribe("view-mode", (mode) => {
    setViewMode(mode);
  });

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
            const selected = pathname.startsWith(it.category);

            return [
              index === 0 ? undefined : <span class="divider"></span>,
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
          {viewMode === "dark" ? (
            <RoundButton
              iconOnly
              quiet
              variant="dark"
              onClick={() => {
                setViewMode("light");
                useEmit("view-mode", "light");
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
                useEmit("view-mode", "dark");
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
