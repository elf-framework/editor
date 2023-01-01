import CloseFilled from "@elf-framework/icon/CloseFilled";
import { classnames, useSetStoreValue } from "@elf-framework/sapa";
import { Button, Flex, Sidebar } from "@elf-framework/ui";

import mainMenus from "../constants/main-menus";
import { Logo } from "../layouts/items/Logo";
import "./MobileMenu.scss";

export function MobileMenu({ menu }) {
  const pathname = location.pathname;
  const setShowMobileMenu = useSetStoreValue("show.mobile.menu");

  return (
    <div
      class="mobile-menu"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        class="mobile-menu-content"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#fff",
          // padding: 20,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div class="mobile-menu-header">
          <Flex
            style={{
              padding: "10px 10px 10px 20px",
            }}
          >
            <div
              style={{
                flex: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Logo />
            </div>
            <div
              style={{
                flex: 1,
                alignItems: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button iconOnly quiet onClick={() => setShowMobileMenu(false)}>
                <CloseFilled />
              </Button>
            </div>
          </Flex>
        </div>
        <Flex
          class="mobile-menu-body"
          style={{
            flex: "1 1 auto",
            borderTop: "1px solid #eee",
            textAlign: "left",
          }}
        >
          <div
            class="side-menu"
            style={{
              flex: "1 1 auto",
              boxSizing: "border-box",
              borderRight: "1px solid #eee",
              display: "block",
            }}
          >
            {mainMenus.map((it) => {
              const selected = pathname.startsWith(it.category);

              return (
                <div
                  class={classnames("side-menu-item", {
                    selected,
                  })}
                >
                  {!selected ? (
                    <a href={it.link} class="side-menu-item-title link">
                      {it.title}
                    </a>
                  ) : (
                    <div class="side-menu-item-title">{it.title}</div>
                  )}

                  {selected ? (
                    <Sidebar
                      items={menu}
                      hasSelected={(it) => {
                        return it.link === pathname;
                      }}
                    />
                  ) : undefined}
                </div>
              );
            })}
          </div>
        </Flex>
      </div>
    </div>
  );
}
