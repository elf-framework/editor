import { brightness, parse } from "@elf-framework/color";
import { Flex, VBox, View } from "@elf-framework/ui";

export function ColorView({ color, text, css, style }) {
  const rgb = parse(color);
  const b = brightness(rgb.r, rgb.g, rgb.b);

  const fontColor = b > 150 ? "black" : "white";

  return (
    <VBox>
      <Flex
        direction="row"
        style={{
          backgroundColor: color,
          boxSizing: "border-box",
          padding: "10px",
          color: fontColor,
          ...style,
        }}
      >
        <div
          style={{
            flex: "1 1 auto",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {text}
        </div>
        <div
          style={{
            flex: "1 1 auto",
            justifyContent: "flex-end",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          {color.toUpperCase()}
        </div>
      </Flex>
      <View padding={5}>{css}</View>
    </VBox>
  );
}
