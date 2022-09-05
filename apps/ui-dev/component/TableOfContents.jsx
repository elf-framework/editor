import { classnames, useStore, useSubscribe } from "@elf-framework/sapa";

import "./TableOfContents.scss";
export function TableOfContents({ items }) {
  useSubscribe("scrollTarget", () => {
    this.render();
  });

  const scrollTarget = useStore("scrollTarget");

  return (
    <div class="table-of-contents">
      <div class="items">
        <div class="title">Table of contents</div>
        {items.map((it) => {
          const selected = scrollTarget === it.id;
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
