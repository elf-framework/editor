import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

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
      tools = [],
      direction = "top-left",
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--notification", {
        [direction]: true,
        "has-icon": icon,
      });
    }, [direction, icon]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {icon ? <div class="icon">{icon}</div> : undefined}
        <div class="content">
          <div class="text">{content}</div>
        </div>
        {tools?.length ? <div class="tools">{tools}</div> : undefined}
      </div>
    );
  }
}

registerComponent("notification", Notification);
