import SettingsFilled from "@elf-framework/icon/SettingsFilled";
import SouthFilled from "@elf-framework/icon/SouthFilled";
import { ActionGroup, Button } from "@elf-framework/ui";

export const columns = [
  {
    key: "filename",
    title: "File name",
    style: {
      cellAlign: "flex-start",
    },
    tools: [<SouthFilled width={16} />],
  },
  {
    key: "updateAt",
    title: "Last modified",
  },
  {
    key: "type",
    title: "Type",
    style: {
      width: 100,
      cellAlign: "space-between",
    },

    tools: [
      <Button quiet size="small">
        <SettingsFilled />
      </Button>,
    ],
  },
  {
    key: "size",
    title: "Size",
    style: {
      textAlign: "right",
    },
  },
  {
    key: "tools",
    title: "Tools",
    style: {
      width: 130,
    },
  },
];
export const data = [
  {
    filename: "2022 Proposal",
    updateAt: "3 months ago",
    type: "PDF",
    size: "1.2MB",
  },
  {
    filename: "Buget",
    updateAt: "1 months ago",
    type: "XLS",
    size: "1.2MB",
  },
  {
    filename: "Blog Posting_123",
    updateAt: "Just now",
    type: "TXT",
    size: "1.2MB",
  },
  {
    filename: "template - email",
    type: "PDF",
    updateAt: "1 year ago",
    size: "1.2MB",
    tools: [
      <ActionGroup compact style={{ gap: 10 }}>
        <Button size="small">1243</Button>
        <Button size="small">24234</Button>
      </ActionGroup>,
    ],
  },
];
