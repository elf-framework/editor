import { HelpText, VBox } from "@elf-framework/ui";

export function OptionsView() {
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
        }}
      >
        <HelpText>xxx@elf-framework.com</HelpText>

        <HelpText>
          Select the best way to contact you in case there's issue with your
          account.
        </HelpText>

        <HelpText variant="danger">Enter your email address.</HelpText>

        <HelpText variant="danger"> Select a contact method.</HelpText>
      </div>
    </VBox>
  );
}
