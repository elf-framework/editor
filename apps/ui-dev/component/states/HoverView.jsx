import { Button, Grid, RoundButton } from "@elf-framework/ui";

export function HoverView() {
  return (
    <div class="hover-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Hover</strong>
          <div style={{ padding: 10 }}>
            The hover state is initiated by the user and appears when the user
            places the cursor over the interactive item.
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
            <RoundButton variant="primary" hover>
              Action
            </RoundButton>

            <Button hover>Action</Button>
          </div>
        </div>
      </Grid>
    </div>
  );
}
