import { classnames } from "@elf-framework/sapa";

import "./preview.scss";

export function PreviewItem({ content, title, style, link, align }) {
  return (
    <div class="preview" style={style}>
      <div class={classnames("preview-content", align)}>{content}</div>
      <div class="preview-title">
        {link ? <a href={link}>{title}</a> : title}
      </div>
    </div>
  );
}
