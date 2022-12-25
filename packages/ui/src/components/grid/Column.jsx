export function Column({ content, span = 1, style, ...extraProps }) {
  return (
    <div
      class="elf--column"
      {...extraProps}
      style={{
        ...style,
        gridColumn: `span ${span}`,
      }}
    >
      {content}
    </div>
  );
}
