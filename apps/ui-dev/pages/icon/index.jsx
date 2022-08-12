import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { IconLayout } from "../../component/IconLayout";

function Main() {
  return (
    <IconLayout>
      <h1>Basic</h1>
    </IconLayout>
  );
}

start(Main);
