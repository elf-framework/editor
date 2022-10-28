import { Checkbox } from "../../checkbox";

export function BooleanItem({ value, onChange, style }) {
  return (
    <Checkbox
      checked={value}
      style={style}
      onChange={(e) => {
        onChange && onChange(e.target.checked);
      }}
    />
  );
}
