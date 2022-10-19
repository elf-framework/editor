import ErrorOutlined from "@elf-framework/icon/ErrorOutlined";
import HelpOutlineFilled from "@elf-framework/icon/HelpOutlineFilled";
import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import TaskAltOutlined from "@elf-framework/icon/TaskAltOutlined";
import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import { Tooltip, VBox } from "@elf-framework/ui";

function Item({ variant, icon }) {
  return (
    <Tooltip
      variant={variant}
      icon={icon}
      message={<div>text message</div>}
      placement="top"
      show
    >
      {variant}
    </Tooltip>
  );
}

export function IconView() {
  return (
    <VBox
      style={{
        gap: 30,
        backgroundColor: "var(--color-gray-0)",
        padding: [80, 100],
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 100,
          gridTemplateColumns: "repeat(3, 1fr)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Item variant="default" icon={<InfoOutlined />} />
        <Item variant="dark" icon={<HelpOutlineFilled />} />
        <Item variant="primary" icon={<InfoOutlined />} />
        <Item variant="secondary" icon={<TaskAltOutlined />} />
        <Item variant="success" icon={<TaskAltOutlined />} />
        <Item variant="warning" icon={<WarningOutlined />} />
        <Item variant="danger" icon={<ErrorOutlined />} />
      </div>
    </VBox>
  );
}
