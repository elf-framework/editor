import { Grid, RoundButton, VBox } from "@elf-framework/ui";

export function FocusedView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
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
            <RoundButton focused variant="primary">
              Action
            </RoundButton>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          A button can be navigated using a keyboard. The keyboard focus state
          takes the button’s visual hover state and adds a blue ring to the
          button in focus.
        </p>
      </div>
    </Grid>
  );
}
