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
