import { Dom } from "@elf-framework/sapa";
export function Divider() {
  return Dom.createByHTML(/*html*/ `<li class="dropdown-divider"></li>`);
}
