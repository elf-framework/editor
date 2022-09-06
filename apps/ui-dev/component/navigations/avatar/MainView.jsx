import { Avatar, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 300],
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 30,
          width: 240,
        }}
      >
        <div>
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/591983?v=4" />
          </Avatar>
        </div>
        <div>
          <Avatar
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF008C 0%, #FF8C00 100%)",
            }}
          />
        </div>
      </div>
    </VBox>
  );
}
