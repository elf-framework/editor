import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";

import { SapaLayout } from "../../component/SapaLayout";

function Main() {
  return (
    <SapaLayout>
      <h1>Basic</h1>
    </SapaLayout>
  );
}

start(Main);
