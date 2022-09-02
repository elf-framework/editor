import ErrorOutlined from "@elf-framework/icon/ErrorOutlined";
import HelpOutlineFilled from "@elf-framework/icon/HelpOutlineFilled";
import InfoOutlined from "@elf-framework/icon/InfoOutlined";
import TaskAltOutlined from "@elf-framework/icon/TaskAltOutlined";
import WarningOutlined from "@elf-framework/icon/WarningOutlined";
import { Grid, Tooltip, VBox } from "@elf-framework/ui";

function Item({ variant, icon }) {
  return (
    <Tooltip
      variant={variant}
      icon={icon}
      message={<div>text message</div>}
      placement="top"
      show
    />
  );
}

export function IconView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: [80, 40],
          height: 500,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 70,
            flexDirection: "column",
            alignItems: "center",
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
      <div>
        <p>
          3 of the 4 tooltip variants (informative, positive, and negative) can
          include an icon to supplement the messaging. These icons are
          predefined and can not be customized. Unless it's being used to
          provide context about the exact same icon, a semantic tooltip should
          always show an icon. Doing this is essential for helping users with
          color vision deficiency to discern the message tone.
        </p>
      </div>
    </Grid>
  );
}
