import { Flex } from "@elf-framework/ui";

import { CopyText } from "../CopyText";

export function TextInfo({ title, text, strong }) {
  return (
    <Flex
      style={{
        marginBottom: 5,
      }}
    >
      <label
        style={{
          display: "inline-block",
          flex: "none",
          width: 100,
        }}
      >
        {title}
      </label>
      <div style={{ textAlign: "right", fontWeight: strong ? "bold" : "400" }}>
        <CopyText text={text} />
      </div>
    </Flex>
  );
}
