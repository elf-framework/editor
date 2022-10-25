import { Button, RoundButton } from "@elf-framework/ui";

export function FocusView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        gap: 20,
      }}
    >
      <RoundButton variant="primary" focused>
        Action
      </RoundButton>

      <Button focused>Action</Button>
    </div>
  );
}
