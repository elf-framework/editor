import { htmlToVNode, useEffect, useState } from "@elf-framework/sapa";
import mermaid from "mermaid";

export function Diagram({ diagram }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!content) {
      mermaid.mermaidAPI.render("id1", diagram, (svg) => {
        setContent(htmlToVNode(svg));
      });
    }
  }, [content, diagram]);

  return <div>{content}</div>;
}
