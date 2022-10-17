import { Avatar, Grid, Tag, VBox } from "@elf-framework/ui";

export function AvatarView() {
  return (
    <Grid columns={1} gap={30}>
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
            // flexDirection: "column",
            padding: [20, 20],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tag>
            <Avatar size="30">
              <img src="https://avatars.githubusercontent.com/u/591983?v=4" />
            </Avatar>
            &nbsp; Tag 1
          </Tag>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Tags have the option to include an avatar in addition to the label.
            These should be used to represent entities.
          </p>
        </p>
      </div>
    </Grid>
  );
}
