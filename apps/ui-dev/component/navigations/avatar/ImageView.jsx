import { Avatar, Grid, VBox } from "@elf-framework/ui";

export function ImageView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            padding: [20, 40],
            justifyContent: "center",
            alignItems: "flex-start",
            height: 200,
          }}
        >
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/591983?v=4" />
          </Avatar>
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/591983?v=4" />
          </Avatar>
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/591983?v=4" />
          </Avatar>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Avatars can have a defined image, which is usually uploaded by a
            user.
          </p>
        </p>
      </div>
    </Grid>
  );
}
