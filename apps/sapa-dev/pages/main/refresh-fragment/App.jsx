import { start } from "@elf-framework/sapa";

import { Test } from "./Test";

function App() {
  return (
    <div class="root">
      <div>Fragment 시작합니다. 1</div>
      <Test a="1" b="2" c="3" />
      <div>Fragment 끝입니다. 1</div>
    </div>
  );
}

start(App);
