import { UIElement, classnames } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--notification", {
  backgroundColor: true,
  color: true,
  width: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true,
});

export class Notification extends UIElement {
  template() {
    const {
      style = {},
      icon,
      content,
      tools,
      direction = "top-left",
    } = this.props;

    const styleObject = {
      class: classnames(
        "elf--notification",
        `elf--notification-direction-${direction}`
      ),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {icon ? <div class="elf--notification-icon">{icon}</div> : undefined}
        <div class="elf--notification-content">
          <div class="elf--notification-text">{content}</div>
        </div>
        <div class="elf--notification-tools">{tools || []}</div>
      </div>
    );
  }
}

registerComponent("notification", Notification);
