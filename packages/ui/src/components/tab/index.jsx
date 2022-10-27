import {
  UIElement,
  classnames,
  isFunction,
  useMemo,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";
import { TabStrip } from "../tabstrip";

const cssProperties = makeCssVariablePrefixMap("--elf--tab", {
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
    const {
      style = {},
      content,
      full,
      fitted,
      align = "left",
      orientation = "horizontal",
      showIndicator = true,
      size = "medium",
      variant = "default",
      quiet = false,
      stripType = "underline",
      stripStyle = {},
    } = this.props;
    const { activeKey } = this.state;

    const localClass = useMemo(() => {
      return classnames("elf--tab", {
        full,
      });
    }, [full]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <div class="elf--tab-header">
          <TabStrip
            fitted={fitted}
            align={align}
            orientation={orientation}
            activeKey={activeKey}
            showIndicator={showIndicator}
            size={size}
            variant={variant}
            quiet={quiet}
            stripType={stripType}
            style={stripStyle}
            items={content.map((it) => {
              const { title, key, onClick, disabled, style, selectedStyle } =
                it.props;
              const selected = activeKey === key;
              return {
                title: title,
                style,
                disabled,
                selectedStyle,
                key,
                selected,
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

registerComponent("tab", Tab);
registerComponent("Tab", Tab);
registerComponent("TabItem", TabItem);
registerComponent("tab-item", TabItem);
registerComponent("tabitem", TabItem);
