import {
  UIElement,
  classnames,
  isFunction,
  useMemo,
} from "@elf-framework/sapa";

import { registerComponent } from "../../../utils/component";
import { Flex } from "../../flex";
import { Tooltip } from "../../tooltip";

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
    const { selected, selectedType } = this.props;

    return {
      selected,
      selectedType,
    };
  }

  template() {
    const {
      title = "",
      icon,
      style = {},
      tooltip,
      hoverable = true,
    } = this.props;

    const isIconOnly = !title;
    const localClass = useMemo(() => {
      return classnames("elf--tools-item", {
        selected: this.state.selected ? true : undefined,
        "icon-only": isIconOnly,
        hoverable,
      });
    }, [this.state.selected, isIconOnly, hoverable]);

    const buttonComponent = (
      <button type="button" class="tools-button">
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
    );

    let localTooltip = tooltip;
    if (localTooltip) {
      if (typeof localTooltip === "string") {
        localTooltip = { message: localTooltip };
      } else if (typeof localTooltip === "object") {
        // noop
      }
    }

    return (
      <div
        class={localClass}
        data-selected-type={this.state.selectedType}
        onClick={this.props.onClick}
        style={style}
      >
        {localTooltip ? (
          <Tooltip {...localTooltip} style={{ height: "100%" }}>
            {buttonComponent}
          </Tooltip>
        ) : (
          buttonComponent
        )}
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

registerComponent("tools-item", ToolsItem);
registerComponent("toolsitem", ToolsItem);
registerComponent("ToolsItem", ToolsItem);
