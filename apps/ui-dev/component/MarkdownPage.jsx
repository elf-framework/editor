import { classnames, isString } from "@elf-framework/sapa";
import { Divider, Flex } from "@elf-framework/ui";

import { traverseTree } from "../utils/traverseTree";
import "./MarkdownPage.scss";
import { TableOfContents } from "./TableOfContents";

function FileEditorLink({ filename }) {
  return filename ? (
    <div class="filename">
      <a
        href={`https://github.com/elf-framework/editor/tree/develop/apps/ui-dev/${filename}`}
      >
        [Edit on the github]
      </a>
    </div>
  ) : (
    ""
  );
}

function LinkView({ class: className, link, title, category }) {
  return (
    <a
      href={link}
      class={classnames("link", className)}
      style={{
        backgroundColor: `var(--color-white)`,
        padding: `var(--padding-size-large)`,
        textAlign: className === "next" ? "right" : "left",
        alignItems: "center",
        justifyContent: className === "next" ? "flex-end" : "flex-start",
        border: `2px solid var(--color-blue-5)`,
        borderRadius: "4px",
        boxSizing: "border-box",
      }}
    >
      {category ? (
        <small style={{ display: "block", color: `var(--color-gray-5)` }}>
          {category || <span>&nbsp;</span>}
        </small>
      ) : undefined}

      <span
        style={{
          color: `var(--color-blue-7)`,
        }}
      >
        {title}
      </span>
    </a>
  );
}

function PrevNextLink({ prev, next }) {
  return (
    <Flex
      style={{
        gap: "var(--gap-32)",
        height: 80,
        marginTop: 30,
      }}
    >
      {prev ? (
        <LinkView
          class="prev"
          link={prev.item.link}
          title={prev.item.title}
          category={prev.parent?.title}
        />
      ) : (
        <div />
      )}
      {next ? (
        <LinkView
          class="next"
          link={next.item.link}
          title={next.item.title}
          category={next.parent?.title}
        />
      ) : (
        <div />
      )}
    </Flex>
  );
}

function LinkedPage({ menu }) {
  const { pathname } = location;

  const links = traverseTree(menu, (item, depth, parent) => {
    return { item, depth, parent };
  });

  const pages = links.filter((it) => !isString(it.item));
  const index = pages.findIndex((it) => it.item?.link === pathname);

  const prev = index > 0 ? pages[index - 1] : undefined;
  const next = index < pages.length - 1 ? pages[index + 1] : undefined;

  return <PrevNextLink prev={prev} next={next} />;
}

export function MarkdownPage({ page, filename, menu }) {
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
          <FileEditorLink filename={filename} />
          {template}
          <Divider margin={100} />
          <LinkedPage menu={menu} />

          <FileEditorLink filename={filename} />
        </div>

        <TableOfContents items={items} />
      </div>
    </div>
  );
}
