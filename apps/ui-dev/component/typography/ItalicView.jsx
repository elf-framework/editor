import "./ItalicView.scss";

export function ItalicView() {
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
        <div style={{ fontSize: 12 }}>Email Address</div>
        <input type="text" placeholder="abc@elf-framework.com" />
      </label>
    </div>
  );
}
