import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--tabstrip", {
  backgroundColor: true,
  color: true,
  height: true,
  width: true,
  hoverColor: true,
  borderColor: true,
  hgap: true,
  vgap: true,
  delay: true,
});
export class TabStrip extends UIElement {
  template() {
    const { style = {}, items = [], fitted, align = "left" } = this.props;

    const localClass = useMemo(() => {
      return classnames("elf--tabstrip", {
        "is-fitted": fitted,
      });
    }, [fitted]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <div
          class={classnames("elf--tabstrip-content", {
            [`align-${align}`]: true,
          })}
        >
          {items.map((it) => {
            const isSelected = !!it.selected;
            const isDisabled = !!it.disabled;
            const selectedStyle = it.selectedStyle || {};
            const style = it.style || {};
            return (
              <div
                class={classnames("elf--tabstrip-item", {
                  selected: isSelected,
                  disabled: isDisabled,
                })}
                style={isSelected ? selectedStyle : style}
              >
                <div onClick={it.onClick}>{it.title}</div>
              </div>
            );
          })}
        </div>
        {this.props.tools?.length ? (
          <div class="elf--tabstrip-tools">
            {this.props.tools.map((it) => {
              return <div class="elf--tabstrip-tool">{it}</div>;
            })}
          </div>
        ) : undefined}
      </div>
    );
  }
}

registerComponent("tabstrip", TabStrip);
registerComponent("TabStrip", TabStrip);
registerComponent("tab-strip", TabStrip);
