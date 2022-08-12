import { classnames, useEffect, useState } from "@elf-framework/sapa";
import { Flex, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Footer } from "./Footer";
import "./Layout.scss";
import { PageTools } from "./PageTools";

function pageId(url) {
  return "link-" + url.replace(/\//g, "-");
}

function PageMenu({ menu = [] }) {
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
      {menu.map((page) => {
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
  const {
    content,
    width,
    maxWidth = 900,
    menu = [],
    version = "",
    title = "",
  } = props;
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
        <Flex class="layout-logo">
          <div
            style={{
              textAlign: "center",
            }}
          >
            {title}
            <div class="version">
              <small>{version}</small>
            </div>
          </div>
        </Flex>
        <Flex class="layout-tools">
          <PageTools menu={menu} />
        </Flex>
      </div>
      <View class="layout-menu">
        <PageMenu menu={menu} />
      </View>
      <View class="layout-content">
        <div style={{ margin: "0 auto", width, maxWidth }}>{content}</div>
        <Footer />
      </View>
    </div>
  );
}
