import { Select } from "../../select";

export function SelectItem({ value, item, style, onChange }) {
  return (
    <Select
      value={value}
      style={style}
      onChange={(v) => onChange(v, item)}
      options={item.options}
    />
  );
}
