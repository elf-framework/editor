import {
  classnames,
  useCallback,
  useEffect,
  useState,
} from "@elf-framework/sapa";
import { Flex, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { PageTools } from "../component/PageTools";
import "./Layout.scss";

function pageId(url) {
  return "link-" + url.replace(/\//g, "-");
}

function PageMenu({ menu = [], depth = 0 }) {
  const { href, pathname } = location;

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
          return (
            <h1 data-depth={depth} class={classnames("page-title")}>
              {page}
            </h1>
          );
        } else if (page.type === "group") {
          return (
            <div>
              <h1 data-depth={depth} class={classnames("page-title")}>
                {page.title}
              </h1>
              <PageMenu menu={page.items || []} data-depth={depth + 1} />
            </div>
          );
        } else {
          return [
            <div
              class={classnames("page-menu", {
                selected: pathname === page.link,
              })}
              data-depth={depth}
              id={pageId(page.link)}
            >
              <a href={page.link}>{page.title}</a>
            </div>,
            page.items && <PageMenu menu={page.items} depth={depth + 1} />,
          ];
        }
      })}
    </View>
  );
}

export function Layout(props) {
  const { content, width, menu = [], version = "", title = "" } = props;
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = useCallback(() => {
    const localScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    setScrollTop(localScrollTop);
  }, [setScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

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
        <div style={{ margin: "0 auto", width }} class="markdown-body">
          {content}
        </div>
        {/* <Footer /> */}
      </View>
    </div>
  );
}
