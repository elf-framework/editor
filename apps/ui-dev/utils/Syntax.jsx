import { htmlToVNode } from "@elf-framework/sapa";

import "./Syntax.scss";

export function Syntax(code, language = "javascript") {
  const html = window.Prism.highlight(
    code,
    window.Prism.languages.javascript,
    language
  );

  return (
    <div class="syntax">
      <div class="language">{language}</div>
      {htmlToVNode(`<pre>${html}</pre>`)}
    </div>
  );
}
