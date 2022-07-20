import { start, useEffect, useState } from "@elf-framework/sapa";
// import { Tab, TabItem, View } from "@elf-framework/ui";
// import { View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import Sample from "./Sample";

function App() {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(10);

  this.useSubscribeSelf("yellow", () => {
    console.log("trigger yellow");
  });

  return (
    <div>
      <button type="button" onClick={() => setValue(value + 1)}>
        {value}
      </button>
      <button type="button" onClick={() => setValue2(value2 + 10)}>
        Button 2 {value2}
      </button>

      {value2 > 50 ? "" : <Sample onClick="yellow" />}
    </div>
  );
}

start(App);
