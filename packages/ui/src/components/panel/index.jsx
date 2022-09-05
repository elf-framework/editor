import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--panel", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
  padding: true,
  borderRadius: true,
});

export class Panel extends UIElement {
  template() {
    const {
      style = {},
      content,
      theme,
      title = "",
      tools = [],
      mode = "default",
      footer,
    } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--panel", { [mode]: true });
    }, [mode]);

    const styleObject = {
      class: localClass,
      "data-theme": theme,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        {title ? (
          <div class="elf--panel-title">
            <div class="elf--panel-title-text">{title}</div>
            {tools ? (
              <div class="elf--panel-title-tools">{tools || []}</div>
            ) : undefined}
          </div>
        ) : undefined}
        <div class="elf--panel-content">{content}</div>
        {footer ? <div class="elf--panel-footer">{footer}</div> : undefined}
      </div>
    );
  }
}

registerComponent("panel", Panel);
registerComponent("Panel", Panel);
