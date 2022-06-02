import { start } from "@elf/sapa";

import "../scss/index.scss";
import { BlankEditor } from "./blankeditor";
export * from "export-library/index";

export function createBlankEditor(opts) {
  return start(BlankEditor, opts);
}