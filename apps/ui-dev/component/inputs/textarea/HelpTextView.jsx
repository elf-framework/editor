import CheckFilled from "@elf-framework/icon/CheckFilled";
import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import { useState } from "@elf-framework/sapa";
import { Grid, HelpText, TextArea, VBox } from "@elf-framework/ui";

export function HelpTextView() {
  const [invalid, setInvalid] = useState(false);
  const [hasValidIcon, setHasValidIcon] = useState(false);
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 0px",
          fontSize: 13,
        }}
      >
        <Grid columns={1} style={{ padding: [0, 10] }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 0,
              alignItems: "center",
              gap: 30,
            }}
          >
            <TextArea
              label="Email address"
              placeholder="Enter your password"
              value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              rows={5}
              help={
                <HelpText>Password must be at least 8 characters.</HelpText>
              }
            />

            <TextArea
              label="Email address"
              placeholder="Enter your password"
              value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              rows={5}
              invalid={invalid}
              validIcon={hasValidIcon ? <CheckFilled /> : undefined}
              invalidIcon={<WarningOutlined />}
              invalidMessage={
                <HelpText variant="danger">Invalid email address</HelpText>
              }
              onInput={(e) => {
                setInvalid(e.target.value === "" || e.target.value.length < 10);
                if (e.target.value.length > 15) {
                  setHasValidIcon(true);
                }
              }}
            />
          </div>
        </Grid>
      </VBox>
      <div>
        <p>
          A text field can have help text below the field to give extra context
          or instruction about what a user should input in the field. The help
          text area has two options: a description and an error message. The
          description communicates a hint or helpful information, such as
          specific requirements for correctly filling out the field. The error
          message communicates an error for when the field requirements aren’t
          met, prompting a user to adjust what they had originally input.
        </p>
      </div>
    </Grid>
  );
}
