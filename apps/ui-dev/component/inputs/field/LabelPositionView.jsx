import { Field, InputEditor, VBox } from "@elf-framework/ui";

export function LabelPositionView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "30px 20px",
        fontSize: 13,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 30,
          flexDirection: "column",
          padding: [20, 40],
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Field label="Email address">
          <InputEditor />
        </Field>

        <Field label="Email address" position="horizontal">
          <InputEditor />
        </Field>
      </div>
    </VBox>
  );
}
