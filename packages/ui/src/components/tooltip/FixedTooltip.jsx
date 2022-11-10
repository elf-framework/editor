import { Dom, useCallback, useRef } from "@elf-framework/sapa";

import { tooltip } from "./index";

export function FixedTooltip({
  content,
  message,
  position = "fixed",
  options,
  ...tooltipProps
}) {
  const tooltipRef = useRef(null);

  const onMouseEnter = useCallback(
    (e) => {
      const target = Dom.create(e.target);
      const labelRect = target.rect();
      const { left, top, width, height, right, bottom } = labelRect;

      // TODO: container 의 영역에 따라서 tooltip 의 위치를 조정한다.
      const container = options?.container || document.body;

      tooltipRef.current = tooltip({
        placement: "top",
        ...tooltipProps,
        message,
        position,
        style: {
          left,
          top,
          width,
          height,
          right,
          bottom,
        },
        options,
      });
    },
    [message]
  );

  const onMouseLeave = useCallback(() => {
    tooltipRef.current.close();
    tooltipRef.current.remove();
    tooltipRef.current = null;
  }, [message]);

  return (
    <div
      class="elf--fixed-tooltip"
      style={{
        display: "inline-block",
        width: "fit-content",
        height: "fit-content",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </div>
  );
}
