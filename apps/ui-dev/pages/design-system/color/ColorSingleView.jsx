import { Flex, VBox, View } from "@elf-framework/ui";

export function ColorSingleView({ color, text, css, style }) {
  return (
    <VBox>
      <Flex
        direction="row"
        style={{
          boxSizing: "border-box",
          padding: "10px",
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
      <View
        padding={5}
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {css}
      </View>
    </VBox>
  );
}
