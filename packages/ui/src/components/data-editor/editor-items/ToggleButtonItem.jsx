import { IconButton } from "../../icon-button";
import { ToggleButton } from "../../toggle-button";
import "./ButtonItem.scss";

export function ToggleButtonItem({ item }) {
  return <IconButton onChange={item.onChange}>{item.icon}</IconButton>;
}
