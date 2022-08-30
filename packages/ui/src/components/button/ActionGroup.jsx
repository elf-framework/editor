import {
  classnames,
  Dom,
  UIElement,
  useEffect,
  useState,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { convertPropertyToStyleKey, makeStyleMap } from "../../utils/styleKeys";
import { Tooltip, TooltipPosition } from "../tooltip";

import { Button } from ".";

const cssProperties = makeStyleMap("--elf--action-group", {
  backgroundColor: true,
  color: true,
  height: true,
  hoverColor: true,
  borderColor: true,
  boxShadow: true,
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
      onMoreClick,
      ...extraStyle
    } = this.props;

    const [visibleTargetList, setVisibilityTargetList] = useState([]);
    const [rootRect, setRootRect] = useState(null);

    const { style: styleProperties } = convertPropertyToStyleKey(extraStyle);

    useEffect(() => {
      if (!collapsed) return;
      const list = [];
      let totalWidth = 0;
      const localRect = this.$el.rect();
      // console.log(localRect);
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

        resizeObserver.observe(this.$el.el);
      }

      return () => {
        resizeObserver?.disconnect();
      };
    }, [collapsed]);

    const styleObject = {
      class: classnames("elf--action-group", {
        [direction]: true,
        quiet,
        compact,
        collapsed,
        justified,
      }),
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
            position={TooltipPosition.BOTTOM_LEFT}
            style={{ contentPadding: "0px" }}
          >
            <Button>{moreIcon}</Button>
          </Tooltip>
        ) : undefined}
      </div>
    );
  }
}
