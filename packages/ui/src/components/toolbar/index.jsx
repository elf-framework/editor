import { UIElement, classnames, useMemo } from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { Tools } from "../tools/index";

function makeToolbarItem(items = [], options = {}) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;

    return <ToolbarItem ref={ref} {...it} {...options} />;
  });
}

export class ToolbarItem extends UIElement {
  template() {
    const { items, style, emphasized, moreIcon } = this.props;

    return (
      <div class="elf--toolbar-item">
        <Tools
          items={items}
          style={style}
          emphasized={emphasized}
          moreIcon={moreIcon}
        />
      </div>
    );
  }
}

const cssProperties = makeCssVariablePrefixMap("--elf--toolbar", {
  backgroundColor: true,
  color: true,
  height: true,
  align: true,
});

export class Toolbar extends UIElement {
  template() {
    const {
      style = {},
      align = "space-between",
      variant = "default",
      rounded = false,
      emphasized = false,
      items = [],
      class: className,
    } = this.props;

    const localClass = useMemo(() => {
      return classnames(
        "elf--toolbar",
        {
          [align]: true,
          rounded,
          emphasized,
          [variant]: true,
        },
        className
      );
    }, [align, variant, rounded, emphasized, className]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {makeToolbarItem(items, {
          emphasized,
        })}
      </div>
    );
  }
}

registerComponent("toolbar", Toolbar);
registerComponent("Toolbar", Toolbar);
