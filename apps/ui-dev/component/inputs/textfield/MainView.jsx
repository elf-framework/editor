import { HelpText, TextField, VBox } from "@elf-framework/ui";

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
        <TextField label={"Email address"} value="xxx@elf-framework.com" />

        <TextField type="password" label={"Password"} value="password" />

        <TextField
          label={"Title"}
          optional={true}
          help={<HelpText>Designer, lawyer, etc</HelpText>}
        />
      </div>
    </VBox>
  );
}
