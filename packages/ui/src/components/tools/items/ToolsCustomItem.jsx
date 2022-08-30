import { ToolsItem } from "./ToolsItem";

export class ToolsCustomItem extends ToolsItem {
  template() {
    return <div class="elf--tools-item custom">{this.props.render?.()}</div>;
  }
}
