import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import { Toast, VBox } from "@elf-framework/ui";

export function IconView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: "40px 40px",
      }}
    >
      <div>
        <Toast direction="bottom-right" icon={<InfoOutlined />}>
          Hello World yellow 234
        </Toast>
      </div>
    </VBox>
  );
}
