import { VBox, Blank } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 100],
        position: "relative",
      }}
    >
      <div>
        <Blank
          stripe="none"
          // color="white"
          style={{
            height: 100,
            border: "1px solid var(--color-gray-3)",
          }}
        />
      </div>
    </VBox>
  );
}
