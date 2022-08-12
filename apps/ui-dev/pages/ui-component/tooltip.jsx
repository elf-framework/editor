import { start } from "@elf-framework/sapa";
import { Button, Tooltip } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../component/UILayout";

start(() => {
  return (
    <UILayout>
      <div style="display: flex; align-items: center; justify-content: center; width:100vw;height:100vh;">
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 50px; row-gap: 50px;text-align:center;align-items: end;justify-content: center;align-self: center;">
          {[
            "top-left",
            "top",
            "top-right",
            "left",
            "center",
            "right",
            "bottom-left",
            "bottom",
            "bottom-right",
          ].map((direction) => {
            if (direction === "center") {
              return <Button type="primary">Aaaaaa</Button>;
            }

            return (
              <Tooltip
                message={[
                  <div>"fdsafdsfdf"</div>,
                  <div>"fdsafdsfdf"</div>,
                  <div>"fdsafdsfdf"</div>,
                ]}
                position={direction}
              >
                <Button>{direction.toUpperCase()}</Button>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </UILayout>
  );
});
