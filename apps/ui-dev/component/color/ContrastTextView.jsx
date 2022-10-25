import { contrastScoreText } from "@elf-framework/color";
import { Flex, VBox } from "@elf-framework/ui";

export function ContrastTextView({ text, color, textColor, fontSize }) {
  const pass = contrastScoreText(color, textColor, fontSize, 20);

  return (
    <VBox style={{ width: 30, flex: "none", justifyContent: "flex-end" }}>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <label style={{ fontSize, color: textColor }}>{text}</label>
      </Flex>
      <div style={{ height: 10, flex: "none" }}>
        <span
          style={{
            backgroundColor: pass === "FAIL" ? "transparent" : "blue",
            color: "white",
            // padding: "5px 5px",
            borderRadius: 4,
            display: "inline-block",
            width: 8,
            height: 8,
            fontSize: 13,
            boxSizing: "border-box",
            border: "2px solid transparent",
            borderColor: pass === "FAIL" ? "transparent" : "white",
            fontWeight: "bold",
            transition: "all 0.2s ease-in-out",
          }}
        ></span>
      </div>
    </VBox>
  );
}
