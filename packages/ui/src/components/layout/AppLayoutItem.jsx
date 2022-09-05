import { isFunction, useCallback, useState } from "@elf-framework/sapa";

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

registerComponent("AppLayoutItem", AppLayoutItem);
registerComponent("app-layout-item", AppLayoutItem);
registerComponent("applayoutitem", AppLayoutItem);
