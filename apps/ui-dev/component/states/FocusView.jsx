import { Button, Grid, RoundButton } from "@elf-framework/ui";

export function FocusView() {
  return (
    <div class="focus-view">
      <Grid columns={[1, 1]} gap={20}>
        <div>
          <strong>Keyboard Focus</strong>
          <div style={{ padding: 10 }}>
            <div>Keyboard Focus is initiated by the user. </div>

            <div>
              Use the keyboard to highlight items when navigating. Keyboard The
              focus state typically takes the visual hover state of the
              component Add additional marks.
            </div>
            <div>
              Most commonly, there is a two-pixel blue ring around. Components.
            </div>
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
            <RoundButton variant="primary" focused>
              Action
            </RoundButton>

            <Button focused>Action</Button>
          </div>
        </div>
      </Grid>
    </div>
  );
}
