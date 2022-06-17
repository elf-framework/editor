import { UIElement ,classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";


export class Panel extends UIElement {

  template() {
    const { style = {}, content, theme, title = "", tools = [], mode, footer } = this.props;

    const styleObject = {
      class: classnames("elf--panel", `elf--panel-mode-${mode}`),
      "data-theme": theme,
      style: {
        ...propertyMap(style, {
          backgroundColor: "--elf--panel-background",
          color: "--elf--panel-color",
          height: "--elf--panel-height",
          hoverColor: "--elf--panel-hover-color",
          borderColor: "--elf--panel-border-color",
          boxShadow: "--elf--panel-box-shadow",
          padding: "--elf--panel-padding",
          borderRadius: "--elf--panel-border-radius",
        }),
      },
    };

    return (
      <div {...styleObject}>
        {title ? (
          <div class="elf--panel-title">
            <div class="elf--panel-title-text">{title}</div>
            {tools ? (<div class="elf--panel-title-tools">
              {tools || []}
            </div>) : undefined}

          </div>
        ) : undefined}        
        <div class="elf--panel-content">
          {content}
        </div>
        {footer ? (
          <div class="elf--panel-footer">
            {footer}
          </div>
        ) : undefined}
      </div>
    );
  }
}
