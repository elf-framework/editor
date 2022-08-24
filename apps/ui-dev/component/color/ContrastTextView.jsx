import { contrastRatio, contrastScore } from "@elf-framework/color";
import { Flex, VBox } from "@elf-framework/ui";

export function ContrastTextView({ text, color, textColor, fontSize }) {
  const score = contrastScore(contrastRatio(color, textColor));
  const isLarge = fontSize > 20;
  let pass = "FAIL";

  if (isLarge) {
    if (score === "AA Large") {
      pass = "PASS";
    } else if (score === "AA") {
      pass = "PASS";
    } else if (score === "AAA") {
      pass = "PASS";
    }
  } else {
    if (score === "AA") {
      pass = "PASS";
    } else if (score === "AAA") {
      pass = "PASS";
    }
  }
  return (
    <VBox style={{ width: 50, flex: "none" }}>
      <Flex
        style={{
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <label style={{ fontSize, color: textColor }}>{text}</label>
      </Flex>
      <div style={{ height: 30, flex: "none" }}>
        <span
          style={{
            backgroundColor: pass === "FAIL" ? "black" : "blue",
            color: "white",
            padding: "2px 5px",
            borderRadius: 4,
            fontSize: 13,
            boxSizing: "border-box",
            border: "1px solid transparent",
            borderColor: pass === "FAIL" ? "transparent" : "white",
            fontWeight: "bold",
            transition: "all 0.2s ease-in-out",
          }}
        >
          {pass}
        </span>
      </div>
    </VBox>
  );
}
