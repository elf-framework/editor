import { ColorMixer, VBox } from "@elf-framework/ui";

export function SizeView() {
  return (
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
          <div>
            <em>240 x 240</em>
          </div>

          <ColorMixer color="red" hideSlide hideInput />
        </div>

        <div>
          <div>
            <em>192 x 192</em>
          </div>
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
  );
}
