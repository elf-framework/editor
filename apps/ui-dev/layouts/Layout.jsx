import { Flex, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { PageMenu } from "../component/PageMenu";
import { PageTools } from "../component/PageTools";
import "./Layout.scss";

export function Layout(props) {
  const { content, width, menu = [], version = "", title = "" } = props;

  return (
    <div class="layout">
      <div class="layout-header">
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
