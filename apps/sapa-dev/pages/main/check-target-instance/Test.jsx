import { useState } from "@elf-framework/sapa";

export function Test(props) {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(+e.target.value);
  };

  return (
    <div {...props} class="test-component">
      target 만나서 반가워요 하지만 이게 중요한게 아니죠?
      <button type="button">aaaaa bbbbbbb</button>
      <input
        type="range"
        value={value}
        min={0}
        max={100}
        onInput={handleChange}
      />
    </div>
  );
}
