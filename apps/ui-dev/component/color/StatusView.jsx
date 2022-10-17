import { useComponentRender } from "@elf-framework/sapa";
import { Grid } from "@elf-framework/ui";

import { getThemeTokens } from "../../utils/theme";
import { ColorDetailView } from "./ColorDetailView";

export function StatusView() {
  useComponentRender("view-mode");

  const tokens = getThemeTokens();
  return (
    <Grid
      columns={2}
      gap={30}
      style={{
        padding: 30,
      }}
    >
      <ColorDetailView
        color={tokens.color.primary}
        title={"Primary Background"}
        message={"Color Blue 6"}
      />
      <ColorDetailView
        color={tokens.color.hover.primary}
        title={"Primary Action Background"}
        message={"Color Blue 7"}
      />
      <ColorDetailView
        color={tokens.color.secondary}
        title={"Secondary Background"}
        message={"Color Gray 6"}
      />
      <ColorDetailView
        color={tokens.color.hover.secondary}
        title={"Secondary Action Background"}
        message={"Color Gray 7"}
      />
      <ColorDetailView
        color={tokens.color.success}
        title={"Success Background"}
        message={"Color Green 6"}
      />
      <ColorDetailView
        color={tokens.color.hover.success}
        title={"Success Action Background"}
        message={"Color Green 7"}
      />
      <ColorDetailView
        color={tokens.color.danger}
        title={"Danger Background"}
        message={"Color Red 6"}
      />
      <ColorDetailView
        color={tokens.color.hover.danger}
        title={"Danger Action Background"}
        message={"Color Red 7"}
      />
      <ColorDetailView
        color={tokens.color.warning}
        title={"Warning Background"}
        message={"Color Orange 3"}
      />
      <ColorDetailView
        color={tokens.color.hover.warning}
        title={"Warning Action Background"}
        message={"Color Orange 4"}
      />
      <ColorDetailView
        color={tokens.color.info}
        title={"Info Background"}
        message={"Color Blue 4"}
      />
      <ColorDetailView
        color={tokens.color.hover.info}
        title={"Info Action Background"}
        message={"Color Blue 5"}
      />
    </Grid>
  );
}
