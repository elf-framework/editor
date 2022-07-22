import { useContext, useEffect, useState } from "@elf-framework/sapa";

import { MyContext } from "./context";

export const A = () => {};
export function A2() {}
const B = () => {};
export { B };

function useMyState(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    console.log("use effected value", value);

    return () => {
      console.log("unmount");
    };
  }, []);

  return [value, setValue];
}

export default function Sample({ onClick }) {
  const myContextValue = useContext(MyContext);
  // console.log({ myContextValue });
  const [value, setValue] = useMyState(1);
  const [value2, setValue2] = useState(10);

  return (
    <div>
      {value2 > 50 ? (
        ""
      ) : (
        <button
          type="button"
          ref="$button"
          onClick={() => {
            setValue((prevState) => prevState + 1);
            this.runCallback(onClick);
          }}
        >
          fdsafdsafds af {value + 10 ** 2} yello {myContextValue.value}
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