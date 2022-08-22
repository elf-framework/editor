import "./MarkdownPage.scss";
import { TableOfContents } from "./TableOfContents";

export function MarkdownPage({ page, filename }) {
  const template = page();

  const items = [];
  template.children.forEach((child, index) => {
    if (child.nodeName?.startsWith("H")) {
      const text = child.makeText(" ");
      const id = child.makeText("-") + index;
      child.props.id = encodeURIComponent(id);
      child.tagProps.id = encodeURIComponent(id);

      const level = child.nodeName.replace("H", "");

      items.push({ id, text, level });
    }
  });
  return (
    <div class="markdown-page">
      <div class="markdown-page-content">
        <div class="content-container">
          {filename && (
            <div class="filename">
              <a
                href={`https://github.com/elf-framework/editor/tree/develop/apps/ui-dev/${filename}`}
              >
                [Edit on the github]
              </a>
            </div>
          )}
          {template}
          {filename && (
            <div class="filename">
              <a
                href={`https://github.com/elf-framework/editor/tree/develop/apps/ui-dev/${filename}`}
              >
                [Edit on the github]
              </a>
            </div>
          )}
        </div>

        <TableOfContents items={items} />
      </div>
    </div>
  );
}
