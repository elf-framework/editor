import { Field, InputEditor, RadioGroup, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [60, 300],
        position: "relative",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 30,
          width: 240,
        }}
      >
        <Field label="Email address">
          <InputEditor value="sample text" />
        </Field>

        <Field label="Account Type">
          <RadioGroup
            direction="vertical"
            value={10}
            options={[
              { value: 10, label: "Travel", checked: true },
              { value: 20, label: "Music" },
              { value: 30, label: "Shopping" },
            ]}
          />
        </Field>
      </div>
    </VBox>
  );
}
