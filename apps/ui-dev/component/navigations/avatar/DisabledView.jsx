import { Avatar, Grid, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <Grid columns={1} style={{ padding: [0, 10] }}>
          <div
            style={{
              display: "flex",
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar disabled>
              <img src="https://avatars.githubusercontent.com/u/591983?v=4" />
            </Avatar>
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          An avatar in a disabled state shows that an avatar exists, but is not
          available or a user is not active in that circumstance. This can be
          used to maintain layout continuity and communicate that an avatar may
          become available or active later.
        </p>
      </div>
    </Grid>
  );
}
