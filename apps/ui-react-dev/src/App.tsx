import { Button, CheckboxGroup } from "@elf-framework/ui-react";
import "@elf-framework/ui-react/style.css";

function App() {
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
    </div>
  );
}

export default App;
