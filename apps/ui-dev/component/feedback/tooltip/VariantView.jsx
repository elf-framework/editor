import { Grid, Tooltip, VBox } from "@elf-framework/ui";

function Item({ variant }) {
  return (
    <Tooltip variant={variant} message={"text message"} placement="top" show />
  );
}

export function VariantView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 50,
          backgroundColor: "var(--color-gray-0)",
          padding: "70px 100px",
          height: 300,
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
          <Item variant="default" />
          <Item variant="dark" />
          <Item variant="primary" />
          <Item variant="secondary" />
          <Item variant="success" />
          <Item variant="warning" />
          <Item variant="danger" />
          <Item variant="info" />
        </div>
      </VBox>
      <div>
        <p>
          By default, tooltips are the neutral variant. These are the most
          common variant because most tooltips are used to only disclose
          additional information, without conveying a semantic meaning. The
          neutral variant never includes an icon.
        </p>
        <p>
          Tooltips also come in semantic variants: informative (blue), positive
          (green), and negative (red). These use semantic colors to communicate
          the meaning.
        </p>
      </div>
    </Grid>
  );
}
