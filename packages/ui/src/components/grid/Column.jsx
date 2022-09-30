export function Column({ content, span = 1, style, ...extraProps }) {
  return (
    <div
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
