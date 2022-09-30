import { Grid, HelpText, VBox } from "@elf-framework/ui";

export function VariantView() {
  return (
    <Grid columns={["50%", 1]} gap={30}>
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
      <div>
        <p>
          <p>
            Help text has two variants: neutral and negative. The neutral
            variant is used to convey informative messages, while the negative
            variant is used to convey error messages.
          </p>
        </p>
      </div>
    </Grid>
  );
}
