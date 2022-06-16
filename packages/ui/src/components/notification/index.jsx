import { UIElement, classnames } from "@elf/sapa";

import { propertyMap } from "../../utils/propertyMap";


export class Notification extends UIElement {
  template() {
    const { style = {}, icon, content, direction = "top-left" } = this.props;

    const styleObject = {
      class: classnames("elf--notification", `elf--notification-direction-${direction}`),
      style: {
        ...propertyMap(style, {
          backgroundColor: "--elf--notification-background",
          color: "--elf--notification-color",
          height: "--elf--notification-height",
          hoverColor: "--elf--notification-hover-color",
          borderColor: "--elf--notification-border-color",
          boxShadow: "--elf--notification-box-shadow",
          toolsBorderColor: "--elf--notification-tools-border-color",
          toolsBorderRadius: "--elf--notification-tools-border-radius",
        }),
      },
    };

    return (
      <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {icon ? <div class="elf--notification-icon">{icon}</div> : undefined }
        <div class="elf--notification-content">
          <div class="elf--notification-text">{content}</div>
        </div>
        <div class="elf--notification-tools">
          {this.props.tools || []}
        </div>
      </div>

    );
  }
}
