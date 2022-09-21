import { Grid, RoundButton, VBox } from "@elf-framework/ui";

export function VariantView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{ gap: 30, backgroundColor: "var(--color-gray-0)", padding: 40 }}
      >
        <div>
          <Grid columns={[1, 2]} gap={20}>
            {[
              "default",
              "primary",
              "secondary",
              "danger",
              "warning",
              "success",
              "info",
              "dark",
            ].map((variant) => [
              <label>{variant}</label>,
              <div>
                <RoundButton variant={variant}>Action</RoundButton>
                &nbsp; &nbsp;
                <RoundButton outline variant={variant}>
                  Action
                </RoundButton>
              </div>,
            ])}
          </Grid>
        </div>
      </VBox>
      <div>
        <p>
          The accent button communicates strong emphasis and is reserved for
          actions that are essential to an experience. Don’t use more than 3
          accent buttons in the same view. These give extra prominence to
          important actions and are meant to establish a clear hierarchy.
        </p>
      </div>
    </Grid>
  );
}
