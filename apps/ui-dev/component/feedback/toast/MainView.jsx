import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Button, VBox, Toast } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 150px",
        position: "relative",
        height: 300,
      }}
    >
      <div
        style={{
          flex: "none",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            height: 300,
            position: "relative",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <Toast
            direction="bottom-right"
            icon={<InfoOutlined />}
            style={{
              position: "absolute",
            }}
            tools={[
              <Button
                outline
                // variant="danger"
                shape="round"
                in="toast"
                onClick={() => console.log("action")}
              >
                Action
              </Button>,
            ]}
            closable
          >
            Hello World yellow 234
          </Toast>
        </div>
      </div>
    </VBox>
  );
}
