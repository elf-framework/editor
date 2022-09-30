import { start } from "@elf-framework/sapa";
import { Button, Toast } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../layouts/UILayout";

start(function () {
  const tools = [
    <Button onClick={() => console.log("action")}>Action</Button>,
    <Button onClick={() => console.log("Dismiss")}>Dismiss</Button>,
  ];

  return (
    <UILayout>
      <div>
        <Toast direction="top-left" tools={tools}>
          Hello World yellow 234
        </Toast>
        <Toast direction="top" content="Hello World" tools={tools} />
        <Toast direction="top-right" content="Hello World" tools={tools} />
        <Toast direction="left" content="Hello World" tools={tools} />
        <Toast direction="center" content="Hello World" tools={tools} />
        <Toast direction="right" content="Hello World" tools={tools} />
        <Toast direction="bottom-left" content="Hello World" tools={tools} />
        <Toast direction="bottom" content="Hello World" tools={tools} />
        <Toast direction="bottom-right" content="Hello World" tools={tools} />
      </div>
    </UILayout>
  );
});
