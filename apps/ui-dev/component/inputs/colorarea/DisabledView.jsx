import { ColorMixer, Grid, VBox } from "@elf-framework/ui";

export function DisabledView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
          fontSize: 13,
        }}
      >
        <Grid columns={1} style={{ padding: [0, 50] }}>
          <div
            style={{ display: "flex", flexDirection: "column", padding: 20 }}
          >
            <div>&nbsp;</div>
            <ColorMixer
              color="red"
              disabled
              hideSlide
              hideInput
              width={192}
              height={192}
            />
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          A color area in a disabled state shows that an input exists, but is
          not available in that circumstance. This can be used to maintain
          layout continuity and communicate that the area may become available
          later.
        </p>
      </div>
    </Grid>
  );
}
