import { Grid, TextArea, VBox } from "@elf-framework/ui";

export function RequiredOptionalView() {
  return (
    <Grid columns={1} gap={30}>
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
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <TextArea
              label="Email address"
              optional={true}
              value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              rows={5}
            />

            <TextArea
              label="Email address"
              requiredText={"(required)"}
              required={true}
              value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              rows={5}
            />

            <TextArea
              label="Email address"
              required={true}
              value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              rows={5}
            />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Text fields can be marked as optional or required, depending on the
            situation. For required text fields, there are two styling options:
            a “(required)” label or an asterisk. If you use an asterisk, be sure
            to include hint text to explain what the asterisk means. Optional
            text fields are either denoted with text added to the end of the
            label — “(optional)” — or have no indication at all.
          </p>
          <p>
            The asterisk used in this component is an icon that has specific
            spacing from the label text — not part of the label text itself.
          </p>
        </p>
      </div>
    </Grid>
  );
}
