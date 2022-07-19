import { Button, CheckboxGroup } from "@elf-framework/ui-react";
import "@elf-framework/ui-react/style.css";
import { ReactNode, useEffect, useMemo, useState } from "react";

function MyComponent() {
  const [value, setValue] = useState(1);

  console.log(value);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("fdsafdsf");
      setValue(value + 1);
    }, 1000);

    return () => {
      console.log("clear", value);
      clearTimeout(id);
    };
  }, [value]);

  console.log("render component");

  return (
    <button
      type="button"
      onClick={() => setValue(value + 1)}
      style={{ padding: 10 }}
    >
      {value}
    </button>
  );
}

function App() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    console.log("App.tsx");

    return () => {
      console.log("value clear");
    };
  }, [value]);

  useEffect(() => {
    console.log("App.tsx forever");

    return () => {
      console.log("root clear");
    };
  });

  return (
    <div className="App">
      <Button type="primary">fdsafdsfdsf</Button>
      <CheckboxGroup
        value={[10]}
        options={[
          { value: 10, label: "10" },
          { value: 20, label: "20" },
          { value: 30, label: "30" },
        ]}
      />
      {value > 5 ? "" : <MyComponent />}
      <MyComponent />
      <div onClick={() => setValue(value + 1)} style={{ padding: 10 }}>
        {value}
      </div>
    </div>
  );
}

export default App;
