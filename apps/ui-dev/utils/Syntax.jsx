import { htmlToVNode } from "@elf-framework/sapa";

import "./Syntax.scss";

export function Syntax(code, language = "javascript") {
  const html = window.Prism.highlight(
    code,
    window.Prism.languages.javascript,
    language
  );

  return (
    <div
      class="syntax"
      style={{
        borderRadius: 4,
        backgroundColor: "black",
        padding: 20,
        boxSizing: "border-box",
        color: "white",
      }}
    >
      {htmlToVNode(`<pre>${html}</pre>`)}
    </div>
  );
}
