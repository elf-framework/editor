import { InputEditor } from "../../input-editor";

export function NumberInputItem({ value, item, style, onChange }) {
  const { min = 0, max = 100, step = 1 } = item;
  return (
    <InputEditor
      type="number"
      value={value}
      min={min}
      max={max}
      step={step}
      width="100%"
      style={style}
      onInput={(e) => {
        onChange && onChange(Number(e.target.value), item);
      }}
    />
  );
}
