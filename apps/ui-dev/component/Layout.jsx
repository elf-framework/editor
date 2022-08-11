import { classnames, useEffect, useState } from "@elf-framework/sapa";
import { Flex, Grid, VBox, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { pages } from "../constants/pages";
import "./Layout.scss";

function pageId(url) {
  return "link-" + url.replace(/\//g, "-");
}

function PageMenu() {
  const href = window.location.href;

  useEffect(() => {
    setTimeout(() => {
      const el = document.querySelector(".page-menu.selected");
      if (el) {
        el.scrollIntoView();
      }
    }, 100);
  }, [href]);

  return (
    <View>
      {pages.map((page) => {
        if (typeof page === "string") {
          return <h1 class={classnames("page-title")}>{page}</h1>;
        } else {
          return (
            <div
              class={classnames("page-menu", {
                selected: href.includes(page.link),
              })}
              id={pageId(page.link)}
            >
              <a href={page.link}>{page.title}</a>
            </div>
          );
        }
      })}
    </View>
  );
}

export function Layout(props) {
  const { content, width, maxWidth = 900 } = props;
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const localScrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      setScrollTop(localScrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setScrollTop]);

  return (
    <div class="layout">
      <div
        class={classnames("layout-header", {
          fixed: scrollTop > 100,
        })}
      >
        <Flex
          class="layout-logo"
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRight: "1px solid #ececec",
            borderBottom: "1px solid #ececec",
            fontSize: 20,
            fontWeight: 900,
          }}
        >
          ELF
        </Flex>
        <Flex class="layout-toolsr">Menus</Flex>
      </div>
      <View class="layout-menu">
        <PageMenu />
      </View>
      <View class="layout-content">
        <div style={{ margin: "0 auto", width, maxWidth }}>{content}</div>
        <div class="layout-footer">
          <Grid columns={[1, 1, 1]}>
            <div>
              <a href="https://elf-framework.com">ELF</a>
            </div>

            <div>
              <VBox>
                <a href="https://elf-framework.org/pages">Docs</a>
                <a href="https://elf-framework.org/pages/sapa">Sapa</a>
                <a href="https://elf-framework.org/pages/api">UI</a>
                <a href="https://elf-framework.org/pages/api">Router</a>
                <a href="https://elf-framework.org/pages/api">Icon</a>
                <a href="https://elf-framework.org/pages/api">Design System</a>
              </VBox>
            </div>
          </Grid>
        </div>
      </View>
    </div>
  );
}
