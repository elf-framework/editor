import { Slider } from "../../slider";

export function SliderItem({ value, item, style, onChange }) {
  const { min = 0, max = 100, step = 1, fitted = true } = item;
  return (
    <Slider
      min={min}
      max={max}
      step={step}
      value={value}
      style={style}
      size="small"
      fitted={fitted}
      onInput={(v) => {
        onChange && onChange(v);
      }}
      valuePlacement="bottom"
    />
  );
}
