import { start } from "@elf-framework/sapa";

import { SampleApp } from "./SampleApp";

start(<SampleApp />, {
  container: document.getElementById("root"),
});
