import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Button, Notification, VBox } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-1)",
        padding: "60px 150px",
        position: "relative",
        height: 300,
      }}
    >
      <div
        style={{
          flex: "none",
          position: "relative",
        }}
      >
        <Notification
          icon={<InfoOutlined />}
          tools={[
            <Button onClick={() => console.log("action")}>Action</Button>,
            <Button onClick={() => console.log("Dismiss")}>Dismiss</Button>,
          ]}
          style={{
            width: "100%",
            height: 100,
          }}
        >
          Your trial has expired. Please purchase to continue. Please send email
          to elf-framework.com. This sample
        </Notification>
      </div>
    </VBox>
  );
}
