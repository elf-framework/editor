import { ColorMixer, Grid, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [60, 80],
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <div>
            <em>240 x 240</em>
            <ColorMixer color="red" hideSlide hideInput />
          </div>

          <div>
            <em>192 x 192</em>
            <ColorMixer
              color="red"
              hideSlide
              hideInput
              width={192}
              height={192}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          A color area’s width can be customized appropriately for its context.
          By default, the width is size-2400 (192 px on desktop and 240 px on
          mobile).
        </p>
        <p>
          A color area’s height can be customized appropriately for its context.
          By default, the height is size-2400 (192 px on desktop and 240 px on
          mobile).
        </p>
      </div>
    </Grid>
  );
}
