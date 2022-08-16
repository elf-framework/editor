import { htmlToVNode, useEffect, useState } from "@elf-framework/sapa";

export function Diagram({ diagram, graph }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    (async () => {
      const mermaid = (await import("mermaid")).default;
      mermaid.mermaidAPI.initialize({
        securityLevel: "loose",
        theme: "base",
        themeVariables: {
          fontFamily: "pretend",
          fontSize: "20px",
        },
      });
      if (!content) {
        mermaid.mermaidAPI.render("id1", graph || diagram, (svg) => {
          setContent(htmlToVNode(svg));
        });
      }
    })();
  }, [content, diagram]);

  return <div>{content}</div>;
}
