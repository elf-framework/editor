import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";
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

const cssProperties = makeStyleMap("--elf--toolbar", {
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
      type = "default",
      rounded = false,
      emphasized = false,
      items = [],
      class: className,
    } = this.props;

    const styleObject = {
      id: "toolbar-" + this.id,
      class: classnames(
        "elf--toolbar",
        {
          [align]: true,
          rounded,
          emphasized,
          [type]: true,
        },
        className
      ),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    if (Object.keys(styleObject.style).length === 0) {
      delete styleObject.style;
    }

    return (
      <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {makeToolbarItem(items, {
          emphasized,
          toolbarId: "toolbar-" + this.id,
        })}
      </div>
    );
  }
}
