import { Grid, RoundButton, VBox } from "@elf-framework/ui";

export function StyleView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
      >
        <div>
          <Grid
            columns={[1, 1]}
            gap={20}
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <em>Fill</em>
            <em>Outline</em>
            {["default", "primary", "secondary", "danger", "dark"].map(
              (variant) => [
                <div>
                  <RoundButton variant={variant}>Action</RoundButton>
                </div>,
                <div>
                  <RoundButton outline variant={variant}>
                    Action
                  </RoundButton>
                </div>,
              ]
            )}
          </Grid>
        </div>
      </VBox>
      <div>
        <p>
          Buttons are available in either fill or outline styles. A button in
          the fill style has a solid background, since it’s meant to be
          intentionally more prominent than a button in the outline style. An
          outline style button has a visible stroke and no background color, and
          should only be used for secondary actions.
        </p>
      </div>
    </Grid>
  );
}
