import { InputEditor } from "../../input-editor";

export function TextInputItem({ value, style, onChange }) {
  return (
    <InputEditor
      type="text"
      value={value}
      width="100%"
      style={style}
      onInput={(e) => {
        onChange && onChange(e.target.value);
      }}
    />
  );
}
