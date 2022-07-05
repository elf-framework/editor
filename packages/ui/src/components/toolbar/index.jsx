import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";
import { Tools } from "../tools/index";

function makeToolbarItem(items = []) {
  return items.map((it, index) => {
    const ref = `${it.type || "item"}${index}`;

    return <ToolbarItem ref={ref} {...it} />;
  });
}

export class ToolbarItem extends UIElement {
  template() {
    const { items, style } = this.props;
    return (
      <div class="elf--toolbar-item">
        <Tools ref="$tools" items={items} style={style} />
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
    const { style = {}, align, items = [] } = this.props;

    const styleObject = {
      class: classnames("elf--toolbar", {
        [align]: true,
      }),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {makeToolbarItem(items)}
      </div>
    );
  }
}
