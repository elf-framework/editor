import { format, parse, RGBtoHSV } from "@elf-framework/color";
import { useState } from "@elf-framework/sapa";
import { Grid } from "@elf-framework/ui";

import { ColorPaletteButton } from "./ColorPaletteButton";
import { ContrastView } from "./ContrastView";
import { TextInfo } from "./TextInfo";

function ucwords(str) {
  return (" " + str).replace(/ [\w]/g, (w) => w.toLocaleUpperCase()).trim();
}

export function ColorPalette({ title = "", colors = [] }) {
  const [selectedColorIndex, setSelectedColorIndex] = useState("0");

  const selectedColor = colors[selectedColorIndex].color;
  const selectedColorObject = parse(selectedColor);

  const hsvObject = RGBtoHSV(
    selectedColorObject.r,
    selectedColorObject.g,
    selectedColorObject.b
  );

  return (
    <div>
      <h3>{ucwords(title)}</h3>
      <Grid columns={2}>
        <div
          style={{
            // border: "1px solid black",
            boxSizing: "border-box",
            paddingTop: 2,
          }}
        >
          {colors.map((color) => {
            return (
              <ColorPaletteButton
                color={color}
                selected={color.index === selectedColorIndex}
                title={title}
                onClick={() => {
                  setSelectedColorIndex(color.index);
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            "z-index": 1,
            backgroundColor: "white",
          }}
        >
          <Grid
            rows={[1, 1]}
            style={{
              border: "2px solid black",
              boxSizing: "border-box",
              borderLeft: "2px solid black",
              height: "100%",
            }}
          >
            <div
              style={{
                boxSizing: "border-box",
                borderBottom: "2px solid black",
              }}
            >
              <div
                style={{
                  height: "100%",
                  backgroundColor: selectedColor,
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <ContrastView color={selectedColor} />
              </div>
            </div>
            <div
              style={{
                padding: "18px 30px",
                boxSizing: "border-box",
              }}
            >
              <TextInfo
                title="HEX :"
                text={format(selectedColorObject, "hex").toUpperCase()}
                strong={true}
              />
              <TextInfo
                title="RGB :"
                text={format(selectedColorObject, "rgb")}
              />
              <TextInfo
                title="HSL :"
                text={format(selectedColorObject, "hsl")}
              />
              <TextInfo title="HSV :" text={format(hsvObject, "hsv")} />
              <TextInfo
                title="JS :"
                text={`Color${ucwords(title)}${selectedColorIndex}`}
              />
              <TextInfo
                title="CSS :"
                text={`--color-${title}-${selectedColorIndex}`}
              />
              <TextInfo
                title="SCSS :"
                text={`$color-${title}-${selectedColorIndex}`}
              />
              <TextInfo
                title="Props :"
                text={`color.${title}.${selectedColorIndex}`}
              />
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
