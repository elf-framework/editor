import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { SapaLayout } from "../../layouts/SapaLayout";
import { Syntax } from "../../utils/Syntax";
import vnodeJsText from "./codes/vnode.js.txt?raw";

function Main() {
  return (
    <SapaLayout>
      <h1>Dom</h1>
      <p>Sapa 는 Dom 을 잘 다룰 수 있는 몇가지 기능을 제공합니다.</p>

      <h2>Attribute</h2>

      <h2>스타일 속성</h2>
      <p>
        <code>{Syntax(vnodeJsText)}</code>
      </p>

      <h2>ref</h2>
    </SapaLayout>
  );
}

start(Main);
