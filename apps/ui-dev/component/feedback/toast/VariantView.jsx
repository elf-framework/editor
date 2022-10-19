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
          variant="white"
          outline
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
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
      }}
    >
      <div style={{ display: "flex", gap: 20, flexDirection: "column" }}>
        <em>Default variant</em>
        <Item variant="default" />
        <em>Inforamtive variant</em>
        <Item variant="primary" />
        <Item variant="info" />
        <em>Positive variant</em>
        <Item variant="success" />
        <em>Negative variant</em>
        <Item variant="warning" />
        <Item variant="danger" />
      </div>
    </VBox>
  );
}
