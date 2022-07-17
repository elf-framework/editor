import { InputEditor } from "../../input-editor";

const style = {
  boxSizing: "border-box",
};

export function TextInputItem({ item: { value } }) {
  return (
    <InputEditor
      type="text"
      value={value}
      width="100%"
      display="block"
      style={style}
    />
  );
}
