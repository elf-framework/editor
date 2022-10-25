import { Flex } from "@elf-framework/ui";

import { ContrastTextView } from "./ContrastTextView";

export function ContrastView({ color }) {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Flex
        direction="column"
        alignItems="end"
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          gap: 30,
          justifyContent: "space-between",
          padding: 10,
          textAlign: "center",
          transform: "translateY(-50%)",
        }}
      >
        <Flex style={{ justifyContent: "center" }}>
          <ContrastTextView
            fontSize={16}
            text="A"
            color={color}
            textColor={"rgb(57, 68, 77)"}
          />
          <ContrastTextView
            fontSize={26}
            text="A"
            color={color}
            textColor={"rgb(57, 68, 77)"}
          />
        </Flex>
        <Flex style={{ justifyContent: "center" }}>
          <ContrastTextView
            fontSize={16}
            text="A"
            color={color}
            textColor={"white"}
          />
          <ContrastTextView
            fontSize={26}
            text="A"
            color={color}
            textColor={"white"}
          />
        </Flex>
      </Flex>
    </div>
  );
}
