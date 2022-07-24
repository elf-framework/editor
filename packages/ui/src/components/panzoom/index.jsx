import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";

const cssProperties = {
  backgroundColor: "--elf--panzoom-background",
  color: "--elf--panzoom-color",
  height: "--elf--panzoom-height",
  hoverColor: "--elf--panzoom-hover-color",
  borderColor: "--elf--panzoom-border-color",
  boxShadow: "--elf--panzoom-box-shadow",
  padding: "--elf--panzoom-padding",
  borderRadius: "--elf--panzoom-border-radius",
};

export class PanZoom extends UIElement {
  template() {
    const { style = {}, content } = this.props;

    const styleObject = {
      class: classnames("elf--panzoom"),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div {...styleObject}>
        <div class="elf--panzoom-content">{content}</div>
      </div>
    );
  }
}
