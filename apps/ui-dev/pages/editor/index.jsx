import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { EditorLayout } from "../../component/EditorLayout";

function Main() {
  return (
    <EditorLayout>
      <h1>Getting Started - BaseEditor</h1>
      <p>Editor 를 빠르게 만들기 위한 라이브러리</p>
    </EditorLayout>
  );
}

start(Main);
