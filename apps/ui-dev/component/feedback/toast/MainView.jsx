import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { VBox, Toast, RoundButton } from "@elf-framework/ui";

export function MainView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "60px 150px",
        position: "relative",
        height: 400,
      }}
    >
      <div
        style={{
          flex: "none",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            height: 200,
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
              <RoundButton
                outline
                // variant="danger"
                variant="white"
                place="toast"
                onClick={() => console.log("action")}
              >
                Action
              </RoundButton>,
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
