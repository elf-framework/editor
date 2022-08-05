import { useContext, useState } from "@elf-framework/sapa";

import { MyContext } from "./context";

export const A = () => {};
export function A2() {}
const B = () => {};
export { B };

function useMyState(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [value, setValue];
}

export default function Sample({ onClick }) {
  const myContextValue = useContext(MyContext);
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
            this.emit(onClick);
          }}
        >
          fdsafdsafds af {value + 10 ** 2} blue 20 {myContextValue.value}
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
