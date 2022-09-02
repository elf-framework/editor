import EditFilled from "@elf-framework/icon/EditFilled";
import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Alert, Flex, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 150px",
        position: "relative",
      }}
    >
      <Flex style={{ flexDirection: "column", gap: 10, position: "relative" }}>
        <Alert icon={<EditFilled />} title={"title"}>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="primary" closable={true} title={"title"}>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="secondary" closable={true}>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="success" closable={true}>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="danger" closable={true}>
          Your trial has expired. Please purchase to continue.
        </Alert>
        <Alert variant="dark" closable={true}>
          Your trial has expired. Please purchase to continue.
        </Alert>
      </Flex>
    </VBox>
  );
}
