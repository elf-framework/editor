import { UIElement, classnames, isFunction } from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";
import { TabStrip } from "../tabstrip";

const cssProperties = makeStyleMap("--elf--tab", {
  backgroundColor: true,
  color: true,
  height: true,
  width: true,
  hoverColor: true,
  borderColor: true,
});

export function TabItem({ selected, content }) {
  return (
    <div
      class={classnames("elf--tab-content-item", {
        selected,
      })}
    >
      {content}
    </div>
  );
}

export class Tab extends UIElement {
  initState() {
    return {
      activeKey: this.props.activeKey,
    };
  }

  changeActiveKey(key) {
    const { onChange } = this.props;
    this.setState({ activeKey: key });
    if (isFunction(onChange)) {
      onChange(key);
    }
  }

  template() {
    const { style = {}, content, full, fitted, align = "left" } = this.props;
    const { activeKey } = this.state;
    const styleObject = {
      class: classnames("elf--tab", {
        full,
      }),
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <div class="elf--tab-header">
          <TabStrip
            fitted={fitted}
            align={align}
            items={content.map((it) => {
              const { title, key, onClick, disabled, style, selectedStyle } =
                it.props;
              return {
                title: title,
                style,
                disabled,
                selectedStyle,
                selected: key === activeKey,
                onClick: () => {
                  this.changeActiveKey(key);
                  onClick && onClick();
                },
              };
            })}
          />
        </div>
        <div class="elf--tab-body">
          {content.map((it) => {
            const { key, content, disabled } = it.props;
            const selected = key === activeKey;
            return (
              <TabItem key={key} selected={selected} disabled={disabled}>
                {content}
              </TabItem>
            );
          })}
        </div>
      </div>
    );
  }
}
