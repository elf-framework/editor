import { Button, CheckboxGroup } from "@elf-framework/ui-react";
import "@elf-framework/ui-react/style.css";
import { useEffect, useState } from "react";

function MyComponent() {
  const [value, setValue] = useState(1);

  console.log(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setValue(value + 1);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [value]);

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
    console.log("4, App.tsx");

    return () => {
      console.log("5, value clear");
    };
  }, [value]);

  useEffect(() => {
    console.log("6, App.tsx forever");

    return () => {
      console.log("7, root clear");
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
      {/* {value > 5 ? "" : <MyComponent />} */}
      <MyComponent />
      <div onClick={() => setValue(value + 1)} style={{ padding: 10 }}>
        {value}
      </div>
    </div>
  );
}

export default App;
