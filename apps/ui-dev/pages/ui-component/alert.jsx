import { start } from "@elf-framework/sapa";
import { Alert, Flex, View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { Layout } from "../../component/Layout";
import { Syntax } from "../../utils/Syntax";

function Main() {
  return (
    <Layout>
      <View maxWidth={1200}>
        <h1>Alert</h1>

        <Flex
          stack={true}
          style={{
            gap: 10,
          }}
        >
          {Syntax(`
<Alert title={"여기서 잠깐! primary"} type="primary">
  Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
</Alert>          
          `)}

          <Alert
            title={"여기서 잠깐! primary"}
            closable={true}
            delay={2000}
            onHide={() => {
              console.log("hide");
            }}
          >
            Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
            {Syntax(`
  <Alert title={"여기서 잠깐! primary"} closable={true} delay={2000}>
    Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
  </Alert>
`)}
          </Alert>
          <Alert title={"여기서 잠깐! primary"} type="primary">
            Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
          </Alert>
          <Alert title={"여기서 잠깐! secondary"} type="secondary">
            Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
          </Alert>
          <Alert title={"여기서 잠깐! success"} type="success">
            Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
          </Alert>
          <Alert title={"여기서 잠깐! warning"} type="warning">
            Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
          </Alert>
          <Alert title={"여기서 잠깐! info"} type="info">
            Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
          </Alert>
          <Alert title={"여기서 잠깐! danger"} type="danger">
            Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
          </Alert>
        </Flex>
      </View>
    </Layout>
  );
}

start(Main);
