import {
  isFunction,
  pendingComponent,
  removePendingComponent,
  useCallback,
  useEffect,
  useRender,
  useState,
} from "@elf-framework/sapa";

import { registerComponent } from "../../utils/component";
import { AppResizeBar } from "./AppResizeBar";

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
      // 화면 전체를 갱신하지 않고 dom 만 갱신하기 위해서 pending 을 걸어준다.
      pendingComponent(this);

      if (direction === "left" || direction === "right") {
        const lastWidth = Math.min(Math.max(minWidth, size), maxWidth);
        setLastWidth(lastWidth);

        if (itemWidth != lastWidth) {
          isFunction(onResize) && onResize(lastWidth, itemHeight);
        }

        this.$el.css("width", lastWidth + "px");
      } else if (direction === "top" || direction === "bottom") {
        const lastHeight = Math.min(Math.max(minHeight, size), maxHeight);
        setLastHeight(lastHeight);

        this.$el.css("height", lastHeight + "px");
        if (itemHeight != lastHeight) {
          isFunction(onResize) && onResize(itemWidth, lastHeight);
        }
      }

      removePendingComponent(this);
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

  useEffect(() => {
    pendingComponent(this);

    let hasChanged = false;
    if (itemWidth != width) {
      setLastWidth(width);
      hasChanged = true;
    }

    if (itemHeight != height) {
      setLastHeight(height);
      hasChanged = true;
    }

    removePendingComponent(this);

    if (hasChanged) {
      useRender(this);
    }
  }, [itemWidth, itemHeight, width, height]);

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

registerComponent("AppLayoutItem", AppLayoutItem);
registerComponent("app-layout-item", AppLayoutItem);
registerComponent("applayoutitem", AppLayoutItem);
