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
import "./Layout.scss";

function LogoView({ title, version }) {
  return (
    <Grid columns={["50px", 1]}>
      <Flex
        style={{
          justifyContent: "flex-start",
          alignItems: "center",
          fontSize: "var(--font-size-600)",
        }}
      >
        <a href="/" style={{ textDecoration: "none", textAlign: "center" }}>
          🏝
        </a>
      </Flex>
      <VBox style={{ justifyContent: "center" }}>
        <div>EasyLogic Framework</div>
      </VBox>
    </Grid>
  );
}

export function Layout(props) {
  const { content, menu = [], version = "", title = "" } = props;

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
        {version ? (
          <Flex style={{ paddingBottom: 30 }}>package: &nbsp; {version}</Flex>
        ) : undefined}

        <PageMenu menu={menu} />
        <Blank style={{ height: 100 }} />
        <div>
          <ActionGroup justified>
            <Button as="link" href="https://github.com/elf-framework/editor">
              Github
            </Button>
          </ActionGroup>
        </div>
        <Blank />
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
