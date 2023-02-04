import { useState } from "@elf-framework/sapa";

export function SampleApp() {
  const [value, setValue] = useState(1);
  return (
    <button onClick={() => setValue((v) => v + 2)}>test 200 {value}</button>
  );
}
