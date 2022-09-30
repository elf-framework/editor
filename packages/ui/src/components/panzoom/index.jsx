import { UIElement } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--panzoom", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  padding: true,
  borderRadius: true,
});

export class PanZoom extends UIElement {
  template() {
    const { style = {}, content } = this.props;

    const styleObject = {
      class: "elf--panzoom",
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <div class="elf--panzoom-content">{content}</div>
      </div>
    );
  }
}

registerComponent("panzoom", PanZoom);
registerComponent("PanZoom", PanZoom);
registerComponent("pan-zoom", PanZoom);
