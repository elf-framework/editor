import { Grid, Tag, VBox } from "@elf-framework/ui";

export function LabelView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
          height: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            padding: [20, 40],
            justifyContent: "center",
            alignItems: "flex-start",
            height: 200,
          }}
        >
          <Tag>Traveling</Tag>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            Tags should always include a label. These can represent search
            terms, filters, or keywords.
          </p>
        </p>
      </div>
    </Grid>
  );
}
