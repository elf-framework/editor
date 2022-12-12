import { registerComponent } from "../../../utils/component";
import { ToolsItem } from "./ToolsItem";

export class ToolsCustomItem extends ToolsItem {
  template() {
    return (
      <div class="elf--tools-item custom hoverable">
        {this.props.render?.()}
      </div>
    );
  }
}

registerComponent("tools-custom-item", ToolsCustomItem);
registerComponent("toolscustomitem", ToolsCustomItem);
registerComponent("ToolsCustomItem", ToolsCustomItem);
