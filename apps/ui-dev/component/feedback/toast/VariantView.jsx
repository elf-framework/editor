import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Grid, RoundButton, Toast, VBox } from "@elf-framework/ui";

function Item({ variant }) {
  return (
    <Toast
      variant={variant}
      direction="bottom-right"
      icon={<InfoOutlined />}
      tools={[
        <RoundButton
          place="toast"
          variant="outline"
          onClick={() => console.log("action")}
        >
          Action
        </RoundButton>,
      ]}
      closable
    >
      Hello World yellow 234
    </Toast>
  );
}

export function VariantView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "40px 40px",
        }}
      >
        <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
          <Item variant="default" />
          <em>Inforamtive variant</em>
          <Item variant="primary" />
          <em>Positive variant</em>
          <Item variant="success" />
          <Item variant="warning" />
          <em>Negative variant</em>
          <Item variant="danger" />
          <Item variant="info" />
        </div>
      </VBox>
      <div>
        <p>
          The <code>informative</code> toast uses the informative semantic color
          (blue) and has an info icon to help those with color vision deficiency
          discern the message tone. Similar to the accent button, this should be
          used when the message should call extra attention compared to the
          neutral variant.
        </p>
        <p>
          The <code>positive</code> toast uses the positive semantic color
          (green) and has a checkmark icon to help those with color vision
          deficiency discern the message tone. This is used to inform about a
          successful action or completion of a task.
        </p>
        <p>
          The <code>negative</code> toast uses the negative semantic color (red)
          and has an alert icon to help those with color vision deficiency to
          discern the message tone. This is used to show an error or failure.
        </p>
      </div>
    </Grid>
  );
}
