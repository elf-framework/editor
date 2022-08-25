import "./TableOfContents.scss";
export function TableOfContents({ items }) {
  return (
    <div class="table-of-contents">
      <div class="items">
        <div class="title">Table of contents</div>
        {items.map((it) => {
          return (
            <div class="toc-item" data-level={it.level}>
              <a href={`#${it.id}`}>{it.text}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}