import { start } from "@elf-framework/sapa";

import "../scss/index.scss";
import { DesignEditor } from "./designeditor";
export * from "export-library/index";

export function createDesignEditor(opts) {
  return start(DesignEditor, opts);
}
