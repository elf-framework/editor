import { Grid } from "../../grid";

export function GridItem({
  item: { gap, rowGap, columnGap, style, columns = [], items = [] },
  root,
}) {
  return (
    <Grid
      columns={columns}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      style={style}
    >
      {items.map((item, index) => root.makeEditorItem(item, index))}
    </Grid>
  );
}
