export function BoldView() {
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
      <button
        type="button"
        style={{
          backgroundColor: "var(--color-action-primary)",
          border: 0,
          borderRadius: 25,
          padding: "10px 20px",
          fontWeight: "900",
          fontSize: 30,
        }}
      >
        Welcome
      </button>
    </div>
  );
}
