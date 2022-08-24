import { brightness, parse } from "@elf-framework/color";
import { classnames } from "@elf-framework/sapa";
import { ucwords } from "../../utils/ucwords";

export function ColorPaletteButton({ title, color, selected, onClick }) {
  const colorObject = parse(color.color);
  const b = brightness(colorObject.r, colorObject.g, colorObject.b);

  const fontColor = b > 150 ? "black" : "white";

  const selectedWidth = selected
    ? {
        width: "calc(100% + 30px)",
        transform: "translateX(-15px)",
      }
    : {
        width: "100%",
      };
  return (
    <div>
      <button
        style={{
          ...selectedWidth,
          height: 62,
          backgroundColor: color.color,
          // borderRadius: 2,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
          borderRight: 0,
          cursor: "pointer",
          color: fontColor,
          fontSize: 16,
          margin: "-2px 0px 0px",
        }}
        type="button"
        class={classnames({
          selected,
        })}
        onClick={() => {
          onClick(color.index);
        }}
      >
        {ucwords(title)} {color.index}
      </button>
    </div>
  );
}
