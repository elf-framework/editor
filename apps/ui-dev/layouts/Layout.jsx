import { useStoreValue } from "@elf-framework/sapa";
import { ActionGroup, Button, Flex, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { MobileMenu } from "../component/MobileMenu";
import { PageMenu } from "../component/PageMenu";
import { PageTools } from "../component/PageTools";
import { SearchView } from "../component/utils/search-view/SearchView";
import { useOpenSearch } from "../hooks/useOpenSearch";
import { useTheme } from "../hooks/useTheme";
import { Logo } from "./items/Logo";
import "./Layout.scss";

export function Layout(props) {
  const { content, menu = [], version = "", title = "" } = props;

  useOpenSearch();
  useTheme();
  const [openSearchView] = useStoreValue("open.search.view");
  const [showMobileMenu] = useStoreValue("show.mobile.menu");

  return (
    <div class="layout">
      <div class="layout-header">
        <Flex class="layout-logo" style={{ alignItem: "center" }}>
          <Logo title={title} />
        </Flex>
        <Flex class="layout-tools">
          <PageTools menu={menu} />
        </Flex>
      </div>
      <View class="layout-menu">
        <PageMenu
          menu={menu}
          header={version ? <Flex>package: &nbsp; {version}</Flex> : undefined}
          footer={
            <ActionGroup justified>
              <Button as="link" href="https://github.com/elf-framework/editor">
                Github
              </Button>
            </ActionGroup>
          }
        />
      </View>
      <View class="layout-content">
        <div style={{ margin: "0 auto" }} class="markdown-body">
          {content}
        </div>
        {/* <Footer /> */}
      </View>

      {showMobileMenu ? <MobileMenu menu={menu} /> : undefined}
      {openSearchView ? <SearchView /> : undefined}
    </div>
  );
}
