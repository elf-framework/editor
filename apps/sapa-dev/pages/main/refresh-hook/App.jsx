import { start } from "@elf-framework/sapa";

import { Test } from "./Test";
import { Test2 } from "./Test2";

function App() {
  return (
    <div class="root">
      <Test a="1" b="2" c="3" />
      <Test2 />
    </div>
  );
}

start(App);
