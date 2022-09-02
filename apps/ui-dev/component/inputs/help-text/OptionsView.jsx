import { Checkbox, Grid, HelpText, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
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
      <div>
        <p>
          <p>
            The text can accommodate either a description or an error message,
            giving extra context and guidance. Sometimes this communicates what
            to input or select, and sometimes it communicates how. It includes
            information such as:
          </p>

          <ul>
            <li>An overall description of an input field or controls</li>
            <li>
              Hints for what kind of information needs to be input or selected
            </li>
            <li>Specific formatting examples or requirements</li>
          </ul>
          <p>
            Regardless of the kind of message, it should be clear and concise.
            Use 1-2 short, complete sentences that end with a period (never an
            exclamation point). When showing formatting examples, it's not
            necessary to end with a period.
          </p>
        </p>
      </div>
    </Grid>
  );
}
