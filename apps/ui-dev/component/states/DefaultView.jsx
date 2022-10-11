import { Button, Grid, RoundButton } from "@elf-framework/ui";

export function DefaultView() {
  return (
    <div class="default-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Default</strong>
          <div style={{ padding: 10 }}>
            This is the default state of a component or item when not interacted
            with.
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
            <RoundButton variant="primary">Action</RoundButton>

            <Button>Action</Button>
          </div>
        </div>
      </Grid>
    </div>
  );
}
