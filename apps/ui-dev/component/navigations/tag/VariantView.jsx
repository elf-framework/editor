import WarningFilled from "@elf-framework/icon/WarningFilled";
import { Grid, Tag, VBox } from "@elf-framework/ui";

import { ucwords } from "~/utils/ucwords";

export function VariantView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-2)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 50,
            // flexDirection: "column",
            padding: [20, 40],
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <em>Not filled</em>
            <div>
              {[
                "default",
                "primary",
                "danger",
                "success",
                "warning",
                "info",
                "dark",
              ].map((variant) => {
                return (
                  <div>
                    <Tag
                      variant={variant}
                      style={{ marginBottom: 10 }}
                      removable
                      onClose={() => {
                        console.log("removed");
                      }}
                    >
                      <WarningFilled /> {ucwords(variant)}
                    </Tag>
                  </div>
                );
              })}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <em>Filled</em>
            <div>
              {[
                "default",
                "primary",
                "danger",
                "success",
                "warning",
                "info",
                "dark",
              ].map((variant) => {
                return (
                  <div>
                    <Tag
                      variant={variant}
                      style={{ marginBottom: 10 }}
                      removable
                      filled
                      onClose={() => {
                        console.log("removed");
                      }}
                    >
                      <WarningFilled /> {ucwords(variant)}
                    </Tag>
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
            A tag can be marked as having an error to show that it has become
            invalid.
          </p>
          <p>
            Variant List
            <ul>
              <li>primary</li>
              <li>success</li>
              <li>warning</li>
              <li>danger</li>
              <li>info</li>
              <li>dark</li>
            </ul>
          </p>
        </p>
      </div>
    </Grid>
  );
}
