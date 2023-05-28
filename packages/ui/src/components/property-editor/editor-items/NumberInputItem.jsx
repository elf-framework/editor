import { InputEditor } from "../../input-editor";

export function NumberInputItem({ value, item, style, onChange, onInput }) {
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
        // console.log(JSON.stringify(e.target.value));

        // trigger all events
        onInput && onInput(e.target.value, item, e);

        if (e.target.value === "" && e.target.value === "-") {
          // noop
        } else {
          // trigger only onChange event for valid number value
          onChange && onChange(e.target.value, item, e);
        }
      }}
    />
  );
}
