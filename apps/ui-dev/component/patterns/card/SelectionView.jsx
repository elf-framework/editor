import { Grid, Table, VBox } from "@elf-framework/ui";

import { columns, data } from "./data/selection";

export function SelectionView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <Table columns={columns} data={data} selectionStyle="checkbox" />

        <Table columns={columns} data={data} quiet selectionStyle="checkbox" />
      </VBox>
      <div>
        <p>
          Some tables should allow a user to select rows, on which they can take
          an action. If a table has selectable rows, it should have checkboxes
          to the left of the table.
        </p>
        <p>
          All tables have a hover state regardless of if actions or selections
          can be made. This aids the user in viewing content in a single row.
        </p>
      </div>
    </Grid>
  );
}
