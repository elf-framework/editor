import "./MarkdownPage.scss";
import { TableOfContents } from "./TableOfContents";

export function MarkdownPage({ page }) {
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
        <div class="content-container">{template}</div>

        <TableOfContents items={items} />
      </div>
    </div>
  );
}
