import { Dom } from "@elf/sapa";
export function Divider() {
  return Dom.createByHTML(/*html*/ `<li class="dropdown-divider"></li>`);
}
