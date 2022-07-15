import { UIElement, classnames } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";

const cssProperties = makeStyleMap("--elf--tabstrip", {
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
  initState() {
    return {
      items: this.props.items || [],
    };
  }

  template() {
    const { style = {} } = this.props;
    const { items = [] } = this.state;

    const styleObject = {
      class: classnames("elf--tabstrip"),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    return (
      <div class="elf--tabstrip" {...styleObject}>
        <div class="elf--tabstrip-content">
          {items.map((it) => {
            return (
              <div
                class={classnames("elf--tabstrip-item", {
                  selected: !!it.selected,
                })}
                onClick={(e) => this.setSelectedValue(e, it.value)}
              >
                {it.title}
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

  get selectedValue() {
    return this.state.items.find((it) => it.selected)?.value;
  }

  setSelectedValue(e, selectedValue) {
    const oldSelectedValue = this.selectedValue;

    this.setState({
      items: this.state.items.map((it) => {
        it.selected = it.value === selectedValue;

        return it;
      }),
    });

    if (oldSelectedValue !== selectedValue) {
      this.props.onChange && this.props.onChange(e, this);
    }
  }
}
