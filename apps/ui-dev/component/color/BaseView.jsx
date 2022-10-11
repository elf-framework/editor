import { Grid } from "@elf-framework/ui";

import { getThemeTokens } from "../../utils/theme";
import { ColorDetailView } from "./ColorDetailView";

export function BaseView() {
  const tokens = getThemeTokens();

  return (
    <Grid
      columns={2}
      gap={30}
      style={{
        padding: 20,
      }}
    >
      <ColorDetailView
        color={tokens.color.background.default}
        title={"Application Background"}
        message={"Color White"}
      />

      <ColorDetailView
        color={tokens.color.border}
        title={"Border Color"}
        message={"Color Gray 2"}
      />

      <ColorDetailView
        color={tokens.color.text.default}
        title={"Body Text"}
        message={"Color Gray 8"}
      />
      <ColorDetailView
        color={tokens.color.text.title}
        title={"Title Text"}
        message={"Color Gray 9"}
      />
      <ColorDetailView
        color={tokens.color.text.subtitle}
        title={"Subtitle Text"}
        message={"Color Gray 6"}
      />
      <ColorDetailView
        color={tokens.color.text.link}
        title={"Link Text"}
        message={"Color Blue 7"}
      />
    </Grid>
  );
}
