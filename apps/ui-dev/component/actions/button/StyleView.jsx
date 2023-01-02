import { Grid, RoundButton, VBox } from "@elf-framework/ui";

export function StyleView() {
  return (
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
  );
}
