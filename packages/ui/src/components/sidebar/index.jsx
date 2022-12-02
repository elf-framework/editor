import { registerComponent } from "../../utils/component";
import { BaseSidebar } from "./BaseSidebar";
import { CompactSidebar } from "./CompactSidebar";

export function Sidebar(props) {
  let { compact = false, ...otherProps } = props;

  return compact ? (
    <CompactSidebar {...otherProps} />
  ) : (
    <BaseSidebar {...otherProps} />
  );
}

registerComponent("sidebar", Sidebar);
