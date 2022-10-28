import { InputPaint } from "../../input-editor/InputPaint";

export function ColorItem({ value, onChange, item }) {
  const { onClickColorView } = item;
  return (
    <InputPaint
      value={value}
      onChange={onChange}
      onClickColorView={(e, color) => {
        onClickColorView && onClickColorView(e, color);
      }}
    />
  );
}
