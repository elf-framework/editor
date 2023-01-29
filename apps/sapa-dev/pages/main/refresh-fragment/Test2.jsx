import { useState } from "@elf-framework/sapa";

export function Test2({ a, b, c }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <div>Fragment Test2 1</div>
      <div>{value + 1}</div>
      {value > 2 ? <div> Fragment remove 2</div> : undefined}

      <div>
        <div>
          {10 + 300} {b} fdsafdsf dsad
        </div>
        <button
          type="button"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          count +
        </button>
        <button
          type="button"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          count -
        </button>
        <>
          <div>1</div>
          <div>2</div>
          <div>{value}</div>
        </>
      </div>
      <div>Fragment Test2 2</div>
    </>
  );
}
