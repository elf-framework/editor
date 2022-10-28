import { Select } from "../../select";

export function SelectItem({ value, item, style, onChange }) {
  return (
    <Select
      value={value}
      style={style}
      onChange={onChange}
      options={item.options}
    />
  );
}
