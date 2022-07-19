import { start, useEffect, useState } from "@elf-framework/sapa";
// import { Tab, TabItem, View } from "@elf-framework/ui";
// import { View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

function Sample({ onClick }) {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(10);

  useEffect(() => {
    console.log("use effect");
    // const id = window.setInterval(() => {
    //   setValue((v) => v + 1);
    // }, 1000);

    return () => {
      console.log("clean up");
      // window.clearInterval(id);
    };
  }, []);

  console.log("render", value);

  return (
    <div>
      {value2 > 50 ? (
        ""
      ) : (
        <button
          type="button"
          ref="$button"
          onClick={() => {
            this.runCallback(onClick);
          }}
        >
          fdsafdsafds af {value}
        </button>
      )}
      <button
        type="button"
        onClick={() => setValue2((prevState) => prevState + 10)}
      >
        Button 2 {value2}
      </button>
    </div>
  );
}

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
