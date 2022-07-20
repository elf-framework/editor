import { useEffect, useState } from "@elf-framework/sapa";

export const A = () => {};
export function A2() {}
const B = () => {};
export { B };

export default function Sample({ onClick }) {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(10);

  useEffect(() => {
    console.log("use effect 332fs2");
    // const id = window.setInterval(() => {
    //   setValue((v) => v + 1);
    // }, 1000);

    return () => {
      console.log("clean up");
      // window.clearInterval(id);
    };
  }, []);

  console.log("render", value);

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
          }}
        >
          fdsafdsafds af {value + 10 ** 2} yello
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
