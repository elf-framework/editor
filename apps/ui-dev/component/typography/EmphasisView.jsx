import "./EmphasisView.scss";

export function EmphasisView() {
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
        I am <em>emphasized</em>.
      </label>
    </div>
  );
}
