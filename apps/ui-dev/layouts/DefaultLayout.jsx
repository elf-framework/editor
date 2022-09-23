import { classnames } from "@elf-framework/sapa";
import { Flex, View } from "@elf-framework/ui";

import { PageTools } from "../component/PageTools";
import { useScrollStatus } from "../hooks/useScrollStatus";
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

  const scrollTop = useScrollStatus();

  console.log(scrollTop);

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
