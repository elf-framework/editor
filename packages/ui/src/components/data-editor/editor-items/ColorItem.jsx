import { InputPaint } from "../../input-editor/InputPaint";

export function ColorItem({ item: { value, autoFocus } }) {
  return <InputPaint value={value} autoFocus={autoFocus} />;
}
