import { Divider } from "../../divider";

export function DividerItem({ item }) {
  const { margin = 10, style } = item;
  return <Divider style={style} margin={margin} />;
}
