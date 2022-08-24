import { Grid } from "@elf-framework/ui";

export function GridView() {
  return (
    <div class="grid-view">
      <Grid columns={[1, 1]}>
        <div>
          <div
            style={{
              width: 150,
              height: 150,
              backgroundColor: "var(--color-blue-0)",
              border: `1px solid var(--color-blue-5)`,
            }}
          ></div>
          8point
        </div>
        <div>
          <div
            style={{
              width: 150,
              height: 150,
              backgroundColor: "var(--color-blue-0)",
              border: `1px solid var(--color-blue-5)`,
              backgroundImage:
                "repeating-linear-gradient(to right, transparent, transparent 11.9%, var(--color-blue-5) 11.9%, var(--color-blue-5) calc(11.9% + 1px)), repeating-linear-gradient(to bottom, transparent, transparent 12%, var(--color-blue-5) 12%, var(--color-blue-5) calc(12% + 1px))",
            }}
          ></div>
          <div
            style={{
              marginTop: 10,
              width: 20,
              height: 1,
              backgroundColor: "var(--color-blue-6)",
            }}
          ></div>
          1px
        </div>
      </Grid>
    </div>
  );
}
