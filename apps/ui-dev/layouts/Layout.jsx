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
    <Grid columns={["100px", 1]}>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontSize: 40,
        }}
      >
        <a href="/" style={{ textDecoration: "none", textAlign: "center" }}>
          🏝
        </a>
      </Flex>
      <VBox>
        <div>ELF {title}</div>
        <div style={{ fontSize: 12, color: "rgb(170 170 170)" }}>{version}</div>
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
          <LogoView title={title} version={version} />
        </Flex>
        <Flex class="layout-tools">
          <PageTools menu={menu} />
        </Flex>
      </div>
      <View class="layout-menu">
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
