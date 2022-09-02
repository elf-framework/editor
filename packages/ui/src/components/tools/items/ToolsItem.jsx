import { UIElement, classnames, isFunction } from "@elf-framework/sapa";

import { Flex } from "../../flex";

export class ToolsItem extends UIElement {
  initialize() {
    super.initialize();
    // event check
    const events = this.props.events || [];
    if (events.length) {
      events.forEach((event) => {
        this.on(event, () => {
          this.refresh();
        });
      });
    }
  }

  initState() {
    const { title = "", icon, selected, selectedType } = this.props;

    return {
      title,
      icon,
      selected,
      selectedType,
    };
  }

  template() {
    const { title = "", icon } = this.state;
    const { style = {} } = this.props;
    return (
      <div
        class={classnames("elf--tools-item", {
          selected: this.state.selected ? true : undefined,
        })}
        data-selected-type={this.state.selectedType}
        onClick={this.props.onClick}
        style={style}
      >
        <button type="button">
          <Flex style={{ gap: 10 }}>
            {[
              icon ? (
                <span class="icon">{isFunction(icon) ? icon() : icon}</span>
              ) : undefined,
              title ? (
                <span class="menu-title">
                  {isFunction(title) ? title() : title}
                </span>
              ) : undefined,
            ].filter(Boolean)}
          </Flex>
        </button>
      </div>
    );
  }

  setSelected(isSelected = false) {
    this.setState({
      selected: isSelected,
    });
  }

  get selected() {
    if (isFunction(this.state.selected)) {
      return this.state.selected();
    }

    return this.state.selected;
  }

  set selected(value) {
    this.setSelected(value);
  }
}