import { Avatar, Tag, TagGroup, VBox } from "@elf-framework/ui";

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
          width: 240,
        }}
      >
        <TagGroup style={{ width: 300 }}>
          <Tag>
            <Avatar size="30">
              <img src="https://avatars.githubusercontent.com/u/591983?s=96&v=4" />
            </Avatar>
            &nbsp; Tag 1
          </Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 2</Tag>
          <Tag>Tag 2</Tag>

          <Tag
            removable
            onClose={() => {
              console.log("close");
            }}
          >
            Tag 3
          </Tag>
        </TagGroup>
      </div>
    </VBox>
  );
}
