import { Avatar, VBox } from "@elf-framework/ui";

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
        {["50", "100", "200", "300", "400", "500", "600", "700"].map((size) => (
          <div style={{ display: "flex" }}>
            <div style={{ flex: "none", width: 100 }}>
              <em>{size}</em>
            </div>
            <Avatar size={size}>
              <img src="https://avatars.githubusercontent.com/u/591983?v=4" />
            </Avatar>
          </div>
        ))}
      </div>
    </VBox>
  );
}
