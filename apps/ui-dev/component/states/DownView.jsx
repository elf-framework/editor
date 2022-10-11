import { Button, Grid, RoundButton } from "@elf-framework/ui";

export function DownView() {
  return (
    <div class="down-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Down</strong>
          <div style={{ padding: 10 }}>
            A down state is initiated by the user and communicates when an
            interactive item is pressed (by a cursor, stylus, or finger).
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "var(--color-gray-0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 150,
              gap: 20,
            }}
          >
            <RoundButton variant="primary" selected>
              Action
            </RoundButton>

            <Button selected>Action</Button>
          </div>
        </div>
      </Grid>
    </div>
  );
}
