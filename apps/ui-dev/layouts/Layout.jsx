import {
  ActionGroup,
  Blank,
  Button,
  Flex,
  Grid,
  VBox,
  View,
} from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { PageMenu } from "../component/PageMenu";
import { PageTools } from "../component/PageTools";
import { useTheme } from "../hooks/useTheme";
import { Logo } from "./items/Logo";
import "./Layout.scss";

function LogoView() {
  return (
    <div>
      <Logo />
    </div>
  );
}

export function Layout(props) {
  const { content, menu = [], version = "", title = "" } = props;

  useTheme();

  return (
    <div class="layout">
      <div class="layout-header">
        <Flex class="layout-logo">
          <LogoView title={title} />
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
    </div>
  );
}
