import { Badge, Grid, VBox } from "@elf-framework/ui";

import { ucwords } from "~/utils/ucwords";

const variants = [
  "informative",
  "neutral",
  "positive",
  "notice",
  "negative",
  "indigo",
  "celery",
  "yellow",
  "magenta",
  "fuchsia",
  "purple",
  "seafoam",
];

export function VariantView() {
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
        <div
          style={{
            display: "flex",
            gap: 50,
            // flexDirection: "column",
            padding: [20, 100],
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              {variants.map((variant) => {
                return (
                  <div>
                    <Badge variant={variant} style={{ marginBottom: 10 }}>
                      {ucwords(variant)}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>
            When badges have a semantic meaning, they use semantic colors. Use
            these variants for the following statuses:
          </p>
          <p>
            Variant List
            <ul>
              {variants.map((variant) => {
                return <li>{variant}</li>;
              })}
            </ul>
          </p>
        </p>
      </div>
    </Grid>
  );
}
