import {
  UIElement,
  classnames,
  Dom,
  useEffect,
  useState,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";
import { ToolsCustomItem } from "./items/ToolsCustomItem";
import { ToolsItem } from "./items/ToolsItem";
import { ToolsMenuItem } from "./items/ToolsMenuItem";

const ToolsItemType = {
  MENU: "menu",
  ITEM: "item",
  CUSTOM: "custom",
};

function makeToolsItem(items = [], options = {}) {
  return items.map((it, index) => {
    const ref = `${it.type}-${index}`;

    let visibility = options.emphasized
      ? options.visibleTargetList[index]
        ? "visible"
        : "hidden"
      : "visible";

    if (options.visibility) {
      visibility = "visible";
    }

    if (it.type === ToolsItemType.CUSTOM) {
      return <ToolsCustomItem ref={ref} {...it} style={{ visibility }} />;
    }

    if (it.type === ToolsItemType.MENU) {
      return <ToolsMenuItem ref={ref} {...it} style={{ visibility }} />;
    }

    return <ToolsItem ref={ref} {...it} style={{ visibility }} />;
  });
}

function makeHiddenToolsItem(items = [], options = {}) {
  return items.filter((it, index) => {
    let visibility = options.emphasized
      ? options.visibleTargetList[index]
        ? "visible"
        : "hidden"
      : "visible";

    if (options.visibility) {
      visibility = "visible";
    }

    return visibility === "hidden";
  });
}

const cssProperties = makeStyleMap("--elf--tools", {
  backgroundColor: true,
  color: true,
  height: true,
});

export class Tools extends UIElement {
  template() {
    const {
      style = {},
      vertical = false,
      emphasized = false,
      moreIcon,
    } = this.props;

    const [visibleTargetList, setVisibilityTargetList] = useState([]);
    const [lastLeft, setLastLeft] = useState(0);
    const [visibility, setVisibility] = useState(true);
    const [rootRect, setRootRect] = useState(null);

    useEffect(() => {
      let observer, resizeObserver;

      if (emphasized) {
        const options = {
          root: this.parent.parent.$el.el,
          threshold: 1,
        };

        // intersection observer 사용하여 사용자가 접근하는 영역을 감지한다.
        // eslint-disable-next-line no-undef
        observer = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.intersectionRatio < 1) {
              setVisibility(false);
            } else {
              setVisibility(true);
            }
            setRootRect(e.intersectionRect);
          });
        }, options);

        observer.observe(this.$el.el);

        // resize container
        // eslint-disable-next-line no-undef
        resizeObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            setRootRect(Dom.create(entry.target).rect());
          });
        });

        resizeObserver.observe(this.parent.parent.$el.el);
      }

      return () => {
        observer?.disconnect();
        resizeObserver?.disconnect();
      };
    }, [emphasized]);

    useEffect(() => {
      if (emphasized && !visibility) {
        const list = [];

        let totalWidth = 0;
        const localRect = this.$el.rect();
        this.$el.children().forEach((child, index) => {
          if (child.hasClass("hidden-tools")) return;

          const rect = child.rect();

          let isVisible = rect.right + 50 < rootRect.right;

          if (isVisible) {
            totalWidth += rect.width;

            if (totalWidth + 50 > rootRect.width) {
              totalWidth = rootRect.width - 50;
              isVisible = false;
            }
          }

          list[index] = isVisible;
        });

        setVisibilityTargetList(list);
        setLastLeft(localRect.width - (localRect.right - rootRect.right) - 50);
      }
    }, [emphasized, visibility, rootRect]);

    const styleObject = {
      class: classnames("elf--tools", {
        vertical,
        emphasized,
      }),
      style: {
        ...propertyMap(style, cssProperties),
      },
    };

    const items = makeToolsItem(this.props.items, {
      visibleTargetList,
      rootRect,
      visibility,
      emphasized,
    });

    const hiddenItems = makeHiddenToolsItem(this.props.items, {
      visibleTargetList,
      rootRect,
      visibility,
      emphasized,
    });

    return (
      <div {...styleObject} onContextMenu={(e) => e.preventDefault()}>
        {items}
        {hiddenItems.length ? (
          <ToolsMenuItem
            class="hidden-tools"
            items={hiddenItems}
            icon={moreIcon}
            direction="right"
            noArrow={true}
            style={{
              position: "absolute",
              height: "100%",
              left: lastLeft,
            }}
          />
        ) : undefined}
      </div>
    );
  }
}
