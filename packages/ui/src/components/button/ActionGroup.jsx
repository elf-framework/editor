import {
  classnames,
  Dom,
  UIElement,
  useEffect,
  useMemo,
  useState,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { propertyMap } from "../../utils/propertyMap";
import {
  splitStyleKeyAndNoneStyleKey,
  makeCssVariablePrefixMap,
} from "../../utils/styleKeys";
import { Tooltip } from "../tooltip";

import { Button } from ".";

const cssProperties = makeCssVariablePrefixMap("--elf--action-group", {
  alignItems: true,
  gap: true,
});

export class ActionGroup extends UIElement {
  template() {
    const {
      direction = "horizontal",
      quiet = false,
      compact = false,
      justified = false,
      collapsed = false,
      moreIcon = null,
      boundary = 50,
      style = {},
      content,
      shape = "normal",
      ...extraStyle
    } = this.props;

    const [visibleTargetList, setVisibilityTargetList] = useState([]);
    const [rootRect, setRootRect] = useState(null);

    const { style: styleProperties } = splitStyleKeyAndNoneStyleKey(extraStyle);

    useEffect(() => {
      if (!collapsed) return;
      const list = [];
      let totalWidth = 0;
      const localRect = this.$el?.rect();

      if (!localRect) return;

      this.$el.children().forEach((child, index) => {
        if (child.hasClass("hidden-tools")) return;

        const rect = child.rect();

        let isVisible = rect.right + boundary < localRect.right;

        if (isVisible) {
          totalWidth += rect.width;

          if (totalWidth + boundary > localRect.width) {
            totalWidth = localRect.width - boundary;
            isVisible = false;
          }
        }

        list[index] = isVisible;
      });

      setVisibilityTargetList(list);
    }, [collapsed, rootRect]);

    useEffect(() => {
      let resizeObserver;

      if (collapsed) {
        // resize container
        // eslint-disable-next-line no-undef
        resizeObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            setRootRect(Dom.create(entry.target).rect());
          });
        });

        if (!this.$el) return;

        resizeObserver.observe(this.getEl());
      }

      return () => {
        resizeObserver?.disconnect();
      };
    }, [collapsed]);

    const localClass = useMemo(() => {
      return classnames("elf--action-group", {
        [direction]: true,
        quiet,
        compact,
        collapsed,
        justified,
        [shape]: true,
      });
    }, [direction, quiet, compact, collapsed, justified, shape]);

    const styleObject = {
      class: localClass,
      style: propertyMap(
        {
          ...style,
          ...styleProperties,
        },
        cssProperties
      ),
    };

    const items = collapsed
      ? content.filter((item, index) => {
          return visibleTargetList[index];
        })
      : content;

    const hiddenItems = collapsed
      ? content.filter((item, index) => {
          return !visibleTargetList[index];
        })
      : [];

    return (
      <div {...styleObject}>
        {items}
        {hiddenItems.length ? (
          <Tooltip
            message={hiddenItems}
            trigger="click"
            hideArrow={true}
            position={"bottom-left"}
            style={{ contentPadding: "0px" }}
          >
            <Button iconOnly>{moreIcon}</Button>
          </Tooltip>
        ) : undefined}
      </div>
    );
  }
}

registerComponent("action-group", ActionGroup);
registerComponent("ActionGroup", ActionGroup);
