import { useState } from "@elf-framework/sapa";

export function SampleApp() {
  const [value, setValue] = useState(1);
  return (
    <div>
      <button onClick={() => setValue((v) => v + 2)}>test 200 {value}</button>
      <>
        <div>1</div>
        <div>2</div>
        <div>{value}</div>
      </>
    </div>
  );
}
