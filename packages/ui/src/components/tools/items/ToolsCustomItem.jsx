import { classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../../utils/component";
import { ToolsItem } from "./ToolsItem";

export class ToolsCustomItem extends ToolsItem {
  template() {
    const { hoverable = true } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--tools-item custom", {
        hoverable,
      });
    }, [hoverable]);

    return <div class={localClass}>{this.props.render?.(this)}</div>;
  }
}

registerComponent("tools-custom-item", ToolsCustomItem);
registerComponent("toolscustomitem", ToolsCustomItem);
registerComponent("ToolsCustomItem", ToolsCustomItem);
