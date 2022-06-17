import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";


export class VisualBell extends UIElement {
  template() {
    const { style = {}, content, direction = "bottom" } = this.props;

    const styleObject = {
      class: classnames("elf--visual-bell", `elf--visual-bell-direction-${direction}`),
      style: {
        ...propertyMap(style, {
          backgroundColor: "--elf--visual-bell-background",
          color: "--elf--visual-bell-color",
          height: "--elf--visual-bell-height",
          hoverColor: "--elf--visual-bell-hover-color",
          borderColor: "--elf--visual-bell-border-color",
          boxShadow: "--elf--visual-bell-box-shadow",
          toolsBorderColor: "--elf--visual-bell-tools-border-color",
          toolsBorderRadius: "--elf--visual-bell-tools-border-radius",
          hgap: "--elf--visual-bell-hgap",
          vgap: "--elf--visual-bell-vgap",        
        }),
      },
    };

    return (
      <div class="elf--visual-bell" {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        <div class="elf--visual-bell-content">
          <div class="elf--visual-bell-text">{content}</div>
        </div>
        <div class="elf--visual-bell-tools">
          {this.props.tools || []}
        </div>
      </div>
    );
  }
}
