import { hydrate } from "@elf-framework/sapa";

import { SampleApp } from "./SampleApp";

hydrate(<SampleApp />, {
  container: document.getElementById("root"),
});
