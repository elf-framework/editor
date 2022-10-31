import { InputEditor } from "../../input-editor";

export function NumberInputItem({ value, item, style, onChange }) {
  const { min = 0, max = 100 } = item;
  return (
    <InputEditor
      type="number"
      value={value}
      min={min}
      max={max}
      width="100%"
      style={style}
      onInput={(e) => {
        onChange && onChange(Number(e.target.value));
      }}
    />
  );
}
