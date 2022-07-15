import "@elf-framework/design-system/style.css";
import { useState } from "react";

import { Button } from "./components/button";
import { CheckboxGroup } from "./components/checkbox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button type="secondary" onClick={() => setCount(count + 1)}>
        fdsafd {count}
      </Button>
      <CheckboxGroup
        value={[10]}
        options={[
          { value: 10, label: "10" },
          { value: 20, label: "20" },
          { value: 30, label: "30" },
        ]}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
