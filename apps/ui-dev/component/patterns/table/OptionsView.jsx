import { Grid, Table, VBox } from "@elf-framework/ui";

import { columns, data } from "./data/standard";

export function OptionsView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <Table columns={columns} data={data} />

        <Table columns={columns} data={data} quiet />
      </VBox>
      <div>
        <p>
          Use a standard table when a table is the main focus of an experience.
          Quiet tables are for when a table is meant to be supplementary,
          subtle, or lightweight.
        </p>
      </div>
    </Grid>
  );
}
