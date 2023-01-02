import MenuFilled from "@elf-framework/icon/MenuFilled";
import SearchFilled from "@elf-framework/icon/SearchFilled";
import { classnames, useSetStoreValue } from "@elf-framework/sapa";
import { Button } from "@elf-framework/ui";

import mainMenus from "../constants/main-menus";
import "./PageTools.scss";
import { PeerView } from "./utils/peer-view/PeerView";
import { ThemeButton } from "./utils/theme-button/ThemeButton";

export function PageTools() {
  const pathname = location.pathname;

  const setShowMobileMenu = useSetStoreValue("show.mobile.menu");
  const setOpenSearchView = useSetStoreValue("open.search.view");

  return (
    <div class="page-tools">
      <div class="sm" style={{ whiteSpace: "nowrap" }}>
        <PeerView noLabel={true} />

        <Button iconOnly quiet onClick={() => setOpenSearchView(true)}>
          <SearchFilled />
        </Button>

        <Button iconOnly quiet onClick={() => setShowMobileMenu(true)}>
          <MenuFilled />
        </Button>
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Button
            onClick={() => {
              setOpenSearchView(true);
            }}
          >
            Open search
          </Button>
          <PeerView />
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
