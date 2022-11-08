import { HelpText, VBox } from "@elf-framework/ui";

export function VariantView() {
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
        <div>
          <div>
            <em>Neutral</em>
          </div>
          <HelpText>Password must be at least 8 characters.</HelpText>
        </div>
        <div>
          <div>
            <em>primary</em>
          </div>
          <HelpText variant="primary">
            Password must be at least 8 characters.
          </HelpText>
        </div>
        <div>
          <div>
            <em>Success</em>
          </div>
          <HelpText variant="success">
            Password must be at least 8 characters.
          </HelpText>
        </div>
        <div>
          <div>
            <em>warning</em>
          </div>
          <HelpText variant="warning">
            Password must be at least 8 characters.
          </HelpText>
        </div>
        <div>
          <div>
            <em>Danger</em>
          </div>
          <HelpText variant="danger">
            Password must be at least 8 characters.
          </HelpText>
        </div>
      </div>
    </VBox>
  );
}
