export function UnderlineView() {
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
      <label>
        See{" "}
        <a
          href="#"
          style={{
            textDecoration: "underline",
          }}
        >
          this link
        </a>{" "}
        for more information.
      </label>
    </div>
  );
}
