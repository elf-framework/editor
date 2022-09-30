import { Divider, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        overflow: "auto",
        backgroundColor: "var(--color-gray-0)",
        padding: 40,
      }}
    >
      <div>
        <h1 style={{ marginBottom: 10 }}>Profile</h1>
        <Divider />
        <p>Your profile is a place to keep your settings and preferences.</p>
      </div>
    </VBox>
  );
}
