import { useState } from "@elf-framework/sapa";

import "./CopyText.scss";

export function CopyText({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <span
      class="copy-text"
      style={{
        cursor: "pointer",
      }}
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 500);
      }}
    >
      {copied ? <span style={{ color: "#8f8fff" }}>Copied!</span> : text}
    </span>
  );
}
