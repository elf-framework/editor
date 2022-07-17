import { Button } from "../../button";
import "./ButtonItem.scss";

export function ButtonItem({ item }) {
  return <Button onClick={item.onClick}>{item.title}</Button>;
}
