import SouthFilled from "@elf-framework/icon/SouthFilled";
import { ActionGroup, Button } from "@elf-framework/ui";

export const columns = [
  {
    key: "filename",
    title: ["File name", <SouthFilled width={16} />],
    style: {
      cellAlign: "flex-start",
    },
  },
  {
    key: "updateAt",
    title: "Last modified",
    style: {
      display: "none",
    },
  },
  {
    key: "type",
    style: {
      width: 30,
      cellAlign: "space-between",
    },

    title: ["Type"],
  },
  {
    key: "size",
    title: "Size",
    style: {
      width: 50,
      textAlign: "right",
    },
  },
  {
    key: "tools",
    title: "Tools",
    style: {
      width: 100,
      display: "none",
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
        <Button>1243</Button>
        <Button>24234</Button>
      </ActionGroup>,
    ],
  },
];
