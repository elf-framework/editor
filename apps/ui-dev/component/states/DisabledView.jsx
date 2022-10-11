import { Button, Grid, RoundButton } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <div class="disable-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Disabled</strong>
          <div style={{ padding: 10 }}>
            A disabled state is initiated by a component option. It shows that
            the item exists, but is not interactive in that circumstance. This
            state can be used to maintain layout continuity and to communicate
            that an action may become available later.
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
            <RoundButton variant="primary" disabled>
              Action
            </RoundButton>

            <Button disabled>Action</Button>
          </div>
        </div>
      </Grid>
    </div>
  );
}
