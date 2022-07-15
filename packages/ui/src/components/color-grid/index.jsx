import { UIElement } from "@elf-framework/sapa";

import { ColorView } from "../color/ColorView";
import { OptionMenu } from "../option-menu/index";

export class ColorGrid extends UIElement {
  initState() {
    return {
      selectedValue: this.props.selectedValue,
    };
  }

  makeItems() {
    const { items } = this.props;
    const { selectedValue } = this.state;
    return items.map((it) => {
      return {
        title: it.title,
        selectable: true,
        closable: true,
        selected: it.value === selectedValue,
        onClick: () => {
          this.setState({
            selectedValue: it.value,
          });
        },
      };
    });
  }

  template() {
    const { items } = this.props;
    const { selectedValue } = this.state;

    const colorItem = items.find((it) => it.value === selectedValue) ||
      items[0] || { title: "" };

    return (
      <div class="elf--color-grid">
        <div class="elf--color-grid-header">
          <OptionMenu items={this.makeItems()}>{colorItem.title}</OptionMenu>
        </div>
        <div class="elf--color-grid-list">
          {colorItem.colors.map((color) => (
            <div
              class="elf--color-grid-item"
              onClick={() => this.selectColor(color)}
            >
              <ColorView color={color} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  selectColor(color) {
    this.setState({ selectedColor: color }, false);
    this.props.onSelect && this.props.onSelect(color);
  }
}
