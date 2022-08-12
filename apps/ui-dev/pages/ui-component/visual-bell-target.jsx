import { start, useCallback, useState } from "@elf-framework/sapa";
import { bell, Button } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../component/UILayout";

start(function () {
  const [direction, setDirection] = useState("top-left");

  const nextFunc = useCallback(() => {
    const visualBell = bell({
      content: direction,
      direction,
      delay: 2000,
      tools: [
        <Button
          onClick={() => {
            visualBell.hide(1);
          }}
        >
          AAAA
        </Button>,
        <Button>BBB</Button>,
      ],
    });

    switch (direction) {
      case "top-left":
        setDirection("top-right");
        break;
      case "top-right":
        setDirection("bottom-left");
        break;
      case "bottom-left":
        setDirection("bottom-right");
        break;
      case "bottom-right":
        setDirection("top");
        break;
      case "top":
        setDirection("bottom");
        break;
      case "bottom":
        setDirection("left");
        break;
      case "left":
        setDirection("right");
        break;
      case "right":
        setDirection("center");
        break;
      case "center":
        setDirection("top-left");
    }
  }, [direction]);

  return (
    <UILayout>
      <div>
        <Button onClick={nextFunc}>{direction}</Button>
      </div>
    </UILayout>
  );
});
