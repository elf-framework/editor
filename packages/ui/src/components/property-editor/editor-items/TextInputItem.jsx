import { InputEditor } from "../../input-editor";

export function TextInputItem({ key, value, style, item, onChange }) {
  return (
    <InputEditor
      type="text"
      value={value}
      width="100%"
      style={style}
      onInput={(e) => {
        onChange && onChange(e.target.value, item, key);
      }}
    />
  );
}
