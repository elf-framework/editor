import { useState } from "@elf-framework/sapa";

export function Test2({ a, b, c }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <div>{value + 1}</div>
      {value > 10 ? <div>2</div> : undefined}

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
      </div>
    </>
  );
}
