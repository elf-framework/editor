import { InputPaint } from "../../input-editor/InputPaint";

export function ColorItem({ value, onChange, item }) {
  const { onClickColorView } = item;
  return (
    <InputPaint
      value={value}
      sync
      onChange={(color, inputPaintInstance) => {
        onChange && onChange(color, inputPaintInstance);
      }}
      onClickColorView={(e, color) => {
        onClickColorView && onClickColorView(e, color);
      }}
    />
  );
}
