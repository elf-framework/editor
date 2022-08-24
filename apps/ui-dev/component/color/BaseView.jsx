import tokens from "@elf-framework/design-tokens/tokens.json";
import { Grid } from "@elf-framework/ui";

import { ColorDetailView } from "./ColorDetailView";

export function BaseView() {
  return (
    <Grid
      columns={2}
      gap={30}
      style={{
        padding: 20,
      }}
    >
      <ColorDetailView
        color={tokens.color.white}
        title={"Application Background"}
        message={"Color White"}
      />

      <ColorDetailView
        color={tokens.color.border}
        title={"Border Color"}
        message={"Color Gray 2"}
      />

      <ColorDetailView
        color={tokens.color.black}
        title={"Body Text"}
        message={"Color Gray 8"}
      />
    </Grid>
  );
}
