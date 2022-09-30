import { Table } from "@elf-framework/ui";

import { columns, data } from "./data/main";

export function MainView() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-gray-0)",
        padding: [20, 2, 10],
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 900,
        }}
      >
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
