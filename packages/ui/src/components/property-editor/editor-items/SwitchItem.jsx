import { Switch } from "../../switch";

export function SwitchItem({ item, value, onChange, style }) {
  const { variant } = item;
  return (
    <Switch
      checked={value}
      style={style}
      variant={variant}
      onChange={(e) => {
        onChange && onChange(e.target.checked, item);
      }}
    />
  );
}
