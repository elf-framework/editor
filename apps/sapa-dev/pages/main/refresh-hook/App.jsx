import { start } from "@elf-framework/sapa";

import { Test } from "./Test";

function App() {
  return (
    <div class="root">
      <Test a="1" b="2" c="3" />
    </div>
  );
}

start(App);
