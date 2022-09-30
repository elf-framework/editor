import { UIElement } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--app-layout", {
  backgroundColor: true,
  color: true,
  height: true,
  align: true,
});

export class AppLayout extends UIElement {
  getItem(direction) {
    return this.props.content.find((it) => it.props.direction === direction);
  }

  template() {
    const { style = {} } = this.props;

    const styleObject = {
      class: "elf--app-layout",

      style: propertyMap(style, cssProperties),
    };

    const topLayoutItem = this.getItem("top");
    const bottomLayoutItem = this.getItem("bottom");
    const leftLayoutItem = this.getItem("left");
    const rightLayoutItem = this.getItem("right");
    const centerLayoutItem = this.getItem("center");

    return (
      <div {...styleObject}>
        {topLayoutItem ? topLayoutItem : undefined}
        <div class="elf--app-layout-body">
          {leftLayoutItem ? leftLayoutItem : undefined}
          {centerLayoutItem ? centerLayoutItem : undefined}
          {rightLayoutItem ? rightLayoutItem : undefined}
        </div>
        {bottomLayoutItem ? bottomLayoutItem : undefined}
      </div>
    );
  }
}

registerComponent("app-layout", AppLayout);
registerComponent("AppLayout", AppLayout);
registerComponent("appLayout", AppLayout);
