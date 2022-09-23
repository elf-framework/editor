import { classnames } from "@elf-framework/sapa";

import "./TableOfContents.scss";
export function TableOfContents({ items }) {
  return (
    <div class="table-of-contents">
      <div class="items">
        <div class="title">Table of contents</div>
        {items.map((it) => {
          const selected =
            location.hash.split("#")[1] === encodeURIComponent(it.id);
          return (
            <div
              class={classnames("toc-item", {
                selected,
              })}
              data-level={it.level}
            >
              <a href={`#${it.id}`}>{it.text}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
