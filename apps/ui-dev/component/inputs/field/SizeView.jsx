import { Field, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
          padding: [20, 40],
          alignItems: "center",
        }}
      >
        {["small", "medium", "large", "extra-large"].map((size) => (
          <div style={{ display: "flex" }}>
            <div style={{ flex: "none", width: 100 }}>
              <em>{size}</em>
            </div>
            <Field label={"Label"} size={size} required={true} />
          </div>
        ))}
      </div>
    </VBox>
  );
}
