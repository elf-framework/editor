import { UIElement, classnames, CLICK, POINTERENTER, IF, POINTERLEAVE } from "@elf/sapa";

import { propertyMap } from "../../utils/propertyMap";


export class TabStrip extends UIElement {

  initState() {
    return {
      items : this.props.items || []
    }
  }

  template() {
    const { style = {} } = this.props;
    const { items = [] } = this.state;

    const styleObject = {
      class: classnames("elf--tabstrip"),
      style: {
        ...propertyMap(style, {
          backgroundColor: "--elf--tabstrip-background",
          color: "--elf--tabstrip-color",
          height: "--elf--tabstrip-height",
          width: "--elf--tabstrip-width",
          hoverColor: "--elf--tabstrip-hover-color",
          borderColor: "--elf--tabstrip-border-color",
          hgap: "--elf--tabstrip-hgap",
          vgap: "--elf--tabstrip-vgap",        
          delay: "--elf--tabstrip-delay",
        }),
      },
    };

    return (
      <div class="elf--tabstrip" {...styleObject}>
        <div class="elf--tabstrip-content">
          {items.map(it => {
            return (
              <div class={classnames("elf--tabstrip-item", { selected: !!it.selected } )} onClick={(e) => this.setSelectedValue(e, it.value)}>
                {it.title}
              </div>
            );
          })}
        </div>
        {this.props.tools?.length ? (
          <div class="elf--tabstrip-tools">
            {this.props.tools.map(it => {
              return (
                <div class="elf--tabstrip-tool">
                  {it}
                </div>
              );
            })}
          </div>
        ) : undefined}
      </div>
    );
  }

  get selectedValue() {
    return this.state.items.find(it => it.selected)?.value;
  }

  setSelectedValue(e, selectedValue) {

    const oldSelectedValue = this.selectedValue;

    this.setState({
      items: this.state.items.map(it => {
        it.selected = it.value === selectedValue;

        return it;
      })
    })

    if (oldSelectedValue !== selectedValue) {
      this.props.onChange && this.props.onChange(e, this);
    }
  }

}
