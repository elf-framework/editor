import { View } from "../../view";

export function LabelItem({ style, item: { label } }) {
  return <View style={style}>{label}</View>;
}
