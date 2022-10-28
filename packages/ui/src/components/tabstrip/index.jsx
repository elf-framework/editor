import {
  UIElement,
  classnames,
  useMemo,
  useEffect,
  isUndefined,
  useState,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import { makeCssVariablePrefixMap } from "../../utils/styleKeys";

const cssProperties = makeCssVariablePrefixMap("--elf--tabstrip", {
  backgroundColor: true,
  color: true,
  height: true,
  borderColor: true,
  gap: true,
  offset: true,
  selectedColor: true,
});
export class TabStrip extends UIElement {
  template() {
    const {
      style = {},
      items = [],
      fitted = false,
      align = "left",
      orientation = "horizontal",
      activeKey,
      showIndicator = true,
      compact = false,
      size = "medium",
      variant = "default",
      quiet = false,
      stripType = "underline",
    } = this.props;

    const [indicatorInfo, setIndicatorInfo] = useState({
      left: 0,
      width: 0,
    });

    const localClass = useMemo(() => {
      return classnames("elf--tabstrip", {
        "is-fitted": fitted,
        [orientation]: true,
        [size]: true,
        [variant]: true,
        [stripType]: true,
        quiet,
        compact,
      });
    }, [fitted, orientation, size, variant, quiet, stripType, compact]);

    // tab indicator
    useEffect(() => {
      if (showIndicator) {
        const ref = this.refs[`tab-${activeKey}`];

        if (ref) {
          if (orientation === "horizontal") {
            const left = ref.offsetLeft;
            const width = ref.offsetWidth + (stripType === "group" ? 1 : 0);
            setIndicatorInfo({ left, width });
          } else {
            const top = ref.offsetTop;
            const height = ref.offsetHeight + (stripType === "group" ? 1 : 0);
            setIndicatorInfo({ top, height });
          }
        }
      }
    }, [activeKey, setIndicatorInfo, orientation, showIndicator, stripType]);

    const styleObject = {
      class: localClass,
      style: propertyMap(style, cssProperties),
    };

    return (
      <div {...styleObject}>
        <div
          class={classnames("elf--tabstrip-content", {
            [`align-${align}`]: true,
          })}
        >
          {items.map((it) => {
            const isSelected = isUndefined(it.selected)
              ? activeKey === it.key
              : !!it.selected;
            const isDisabled = !!it.disabled;
            const selectedStyle = it.selectedStyle || {};
            const style = it.style || {};

            return (
              <div
                class={classnames("elf--tabstrip-item", {
                  selected: isSelected,
                  disabled: isDisabled,
                })}
                style={isSelected ? selectedStyle : style}
              >
                <div ref={`tab-${it.key}`} onClick={it.onClick}>
                  {it.title}
                </div>
              </div>
            );
          })}
          {showIndicator ? (
            <div class="indicator">
              <div class="indicator-inner" style={indicatorInfo}></div>
            </div>
          ) : undefined}
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
}

registerComponent("tabstrip", TabStrip);
registerComponent("TabStrip", TabStrip);
registerComponent("tab-strip", TabStrip);
