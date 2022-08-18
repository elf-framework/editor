import {
  classnames,
  useCallback,
  useEffect,
  useState,
} from "@elf-framework/sapa";
import { Flex, View } from "@elf-framework/ui";

import { PageTools } from "../component/PageTools";
import "./Layout.scss";

export function DefaultLayout(props) {
  const {
    content,
    width,
    maxWidth = 900,
    menu = [],
    version = "",
    title = "",
  } = props;
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
    <div class="default-layout">
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
      <View class="layout-content">
        <div
          style={{ margin: "0 auto", width, maxWidth }}
          class="markdown-body"
        >
          {content}
        </div>
      </View>
    </div>
  );
}
