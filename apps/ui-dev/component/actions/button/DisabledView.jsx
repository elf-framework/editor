import { Grid, RoundButton, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [60, 40],
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 50,
            }}
          >
            <RoundButton disabled>Share</RoundButton>

            <RoundButton disabled outline>
              Share
            </RoundButton>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          A button in a disabled state shows that an action exists, but is not
          available in that circumstance. This state can be used to maintain
          layout continuity and to communicate that an action may become
          available later.
        </p>
      </div>
    </Grid>
  );
}
