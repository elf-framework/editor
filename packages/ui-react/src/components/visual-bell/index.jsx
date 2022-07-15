import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";

const cssProperties = makeStyleMap("--elf--visual-bell", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  toolsBorderColor: true,
  toolsBorderRadius: true,
  hgap: true,
  vgap: true,
});

export class VisualBell extends UIElement {
  template() {
    const { style = {}, content, direction = "bottom" } = this.props;

    const styleObject = {
      class: classnames(
        "elf--visual-bell",
        `elf--visual-bell-direction-${direction}`
      ),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div
        class="elf--visual-bell"
        {...styleObject}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div class="elf--visual-bell-content">
          <div class="elf--visual-bell-text">{content}</div>
        </div>
        <div class="elf--visual-bell-tools">{this.props.tools || []}</div>
      </div>
    );
  }
}
