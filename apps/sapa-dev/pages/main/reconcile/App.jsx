import { start } from "@elf-framework/sapa";

import { ElementComponentSwitch } from "./ElementComponentSwitch";
// import { SampleApp } from "./SampleApp";

start(<ElementComponentSwitch a={1} b={2} />, {
  app: 10,
  spline: "sample app",
});
