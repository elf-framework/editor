import { useEffect, useState } from "@elf-framework/sapa";

function Sample2() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("4. 새로고침 될 때 한번만 실행되어야 함", "Sample2");
  }, []);

  return (
    <div class="sample2">
      Sample2 &nbsp; 50 30 20 50 20 {value}
      <button
        onClick={() => {
          setValue((v) => v + 1);
        }}
      >
        {value}
      </button>
    </div>
  );
}

function Sample3() {
  const [value, setValue] = useState(3);

  useEffect(() => {
    console.log("3. 새로고침 될 때 한번만 실행되어야 함", "Sample3");
  }, []);

  return (
    <div>
      <button onClick={() => setValue((v) => v + 1)}>sample2: {value}</button>
      <Sample2 value={value} onClick={setValue} />
    </div>
  );
}

export function Sample() {
  const [value, setValue] = useState(1);

  useEffect(() => {
    console.log("2. 새로고침 될 때 한번만 실행되어야 함", "Sample");
  }, []);

  return <Sample3 value={value} onClick={setValue} />;
}
