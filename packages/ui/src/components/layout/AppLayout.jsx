import {
  isFunction,
  POINTEREND,
  POINTERMOVE,
  POINTERSTART,
  UIElement,
  useCallback,
  useState,
} from "@elf-framework/sapa";

import { propertyMap } from "../../utils/propertyMap";
import { makeStyleMap } from "../../utils/styleKeys";

export class AppResizeBar extends UIElement {
  template() {
    const styleObject = {
      class: "elf--app-layout-resize-bar",
    };

    return <div {...styleObject} />;
  }

  [POINTERSTART()](e) {
    this.startXY = e.xy;
  }

  [POINTERMOVE("document")](e) {
    if (this.startXY) {
      const { xy } = e;
      const diffX = xy.x - this.startXY.x;
      const diffY = xy.y - this.startXY.y;
      if (diffX !== 0 || diffY !== 0) {
        if (isFunction(this.props.onResize)) {
          this.props.onResize(diffX, diffY);
        }
      }
    }
  }

  [POINTEREND("document")]() {
    this.startXY = undefined;

    if (isFunction(this.props.onResizeEnd)) {
      this.props.onResizeEnd();
    }
  }
}

export function AppLayoutItem({
  direction,
  content,
  width = "auto",
  height = "auto",
  maxWidth = 500,
  minWidth = 0,
  maxHeight = 500,
  minHeight = 0,
  resizable = false,
  style,
  onResize,
  onResizeEnd,
}) {
  const [initWidth, setWidth] = useState(width);
  const [initHeight, setHeight] = useState(height);
  const [itemWidth, setLastWidth] = useState(initWidth);
  const [itemHeight, setLastHeight] = useState(initHeight);

  const setSize = useCallback(
    (size) => {
      if (direction === "left" || direction === "right") {
        const lastWidth = Math.min(Math.max(minWidth, size), maxWidth);
        setLastWidth(lastWidth);

        if (itemWidth != lastWidth) {
          isFunction(onResize) && onResize(lastWidth, itemHeight);
        }
      } else if (direction === "top" || direction === "bottom") {
        const lastHeight = Math.min(Math.max(minHeight, size), maxHeight);
        setLastHeight(lastHeight);

        if (itemHeight != lastHeight) {
          isFunction(onResize) && onResize(itemWidth, lastHeight);
        }
      }
    },
    [itemWidth, itemHeight]
  );

  const onResizeCallback = useCallback(
    (diffX, diffY) => {
      if (direction === "left" || direction === "right") {
        setSize(direction === "left" ? initWidth + diffX : initWidth - diffX);
      } else {
        setSize(direction === "top" ? initHeight + diffY : initHeight - diffY);
      }
    },
    [direction, initWidth, initHeight, setSize]
  );

  const onResizeEndCallback = useCallback(() => {
    // 업데이트 된 이후에 변경된 값을 다시 초기값으로 맞춘다.
    setWidth(itemWidth);
    setHeight(itemHeight);
    isFunction(onResizeEnd) && onResizeEnd(itemWidth, itemHeight);
  }, [itemWidth, itemHeight, setWidth, setHeight]);

  return (
    <div
      class="elf--app-layout-item"
      data-direction={direction}
      data-resizable={resizable}
      style={{ ...style, width: itemWidth, height: itemHeight }}
    >
      {content}
      {resizable ? (
        <AppResizeBar
          onResize={onResizeCallback}
          onResizeEnd={onResizeEndCallback}
        />
      ) : undefined}
    </div>
  );
}

const cssProperties = makeStyleMap("--elf--toolbar", {
  backgroundColor: true,
  color: true,
  height: true,
  align: true,
});

export class AppLayout extends UIElement {
  getItem(direction) {
    return this.props.content.find((it) => it.props.direction === direction);
  }

  template() {
    const { style = {} } = this.props;

    const styleObject = {
      class: "elf--app-layout",

      style: propertyMap(style, cssProperties),
    };

    const topLayoutItem = this.getItem("top");
    const bottomLayoutItem = this.getItem("bottom");
    const leftLayoutItem = this.getItem("left");
    const rightLayoutItem = this.getItem("right");
    const centerLayoutItem = this.getItem("center");

    return (
      <div {...styleObject}>
        {topLayoutItem ? topLayoutItem : undefined}
        <div class="elf--app-layout-body">
          {leftLayoutItem ? leftLayoutItem : undefined}
          {centerLayoutItem ? centerLayoutItem : undefined}
          {rightLayoutItem ? rightLayoutItem : undefined}
        </div>
        {bottomLayoutItem ? bottomLayoutItem : undefined}
      </div>
    );
  }
}
