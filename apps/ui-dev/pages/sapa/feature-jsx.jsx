import { start } from "@elf-framework/sapa";
import { Alert } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { SapaLayout } from "../../layouts/SapaLayout";
import { Syntax } from "../../utils/Syntax";
import vnodeJsText from "./codes/vnode.js.txt?raw";

function Main() {
  return (
    <SapaLayout>
      <h1>Jsx</h1>
      <p>Sapa 는 기본 템플릿으로 jsx를 씁니다.</p>
      <p>React 와 같은 방식의 Jsx 문법을 통해서 사용합니다.</p>

      <p>
        잠깐 사용법을 볼까요?
        <code>{Syntax(vnodeJsText)}</code>
      </p>

      <p>
        <h2>1. Props</h2>
        <p>Props are the properties of a component.</p>
        <p>간단한 속성을 가지고 jsx 를 표현해봅시다.</p>
        <p>props 의 사용법은 html 문법과 동일합니다.</p>

        <Alert
          title={"여기서 잠깐! default"}
          onClick={() => {
            console.log("여기서 잠깐 클릭");
          }}
        >
          Sapa 는 리액트와 비슷하지만 html 태그의 기본 문법으로 작성합니다.
        </Alert>
      </p>
    </SapaLayout>
  );
}

start(Main);
