import { Flex, Grid, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { pages } from "../constants/pages";
import "./Layout.scss";

function PageMenu() {
  return (
    <View>
      {pages.map((page) => {
        if (typeof page === "string") {
          return <h1>{page}</h1>;
        } else {
          return (
            <View>
              <a href={page.link}>{page.title}</a>
            </View>
          );
        }
      })}
    </View>
  );
}

export function Layout(props) {
  const { content, width, maxWidth = 900 } = props;

  return (
    <Grid class="layout">
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
      <Flex class="layout-header">Menus</Flex>
      <View
        class="layout-menu"
        style={{
          padding: 10,
          boxSizing: "border-box",
          borderRight: "1px solid #ececec",
        }}
      >
        <PageMenu />
      </View>
      <View class="layout-content">
        <div style={{ margin: "0 auto", width, maxWidth }}>{content}</div>
      </View>
    </Grid>
  );
}
