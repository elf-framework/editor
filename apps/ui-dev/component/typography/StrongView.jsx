export function StrongView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
      }}
    >
      <div>
        <div>This is a strong text.</div>
        <strong>This is a strong text.</strong>
      </div>
    </div>
  );
}
