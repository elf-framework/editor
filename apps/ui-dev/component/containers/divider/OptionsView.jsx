import { Divider, Flex, Grid, VBox } from "@elf-framework/ui";

export function OptionsView() {
  return (
    <Grid columns={["50%", "50%"]} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            display: "flex",
            gap: 30,
            flexDirection: "column",
          }}
        >
          <Flex>
            <em>Small</em>
            <Divider size="small" />
          </Flex>
          <Flex>
            <em>Medium</em>
            <Divider size="medium" />
          </Flex>
          <Flex>
            <em>Large</em>
            <Divider size="large" />
          </Flex>
        </div>
      </VBox>
      <div>
        <p>
          The <code>small</code> divider is the default size. This is used to
          divide similar components such as table rows, action button groups,
          and components within a panel.
        </p>
        <p>
          The <code>medium</code> divider is used for dividing subsections on a
          page, or to separate different groupings of components such as panels,
          rails, etc.
        </p>

        <p>
          The <code>large</code> divider should only be used for page titles or
          section titles.
        </p>
      </div>
    </Grid>
  );
}
