import { start } from "@elf-framework/sapa";
import { Button, VisualBell } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

start(function () {
  const tools = [
    <Button onClick={() => console.log("action")}>Action</Button>,
    <Button onClick={() => console.log("Dismiss")}>Dismiss</Button>,
  ];

  return (
    <div>
      <VisualBell direction="top-left" content="Hello World" tools={tools} />
      <VisualBell direction="top" content="Hello World" tools={tools} />
      <VisualBell direction="top-right" content="Hello World" tools={tools} />
      <VisualBell direction="left" content="Hello World" tools={tools} />
      <VisualBell direction="center" content="Hello World" tools={tools} />
      <VisualBell direction="right" content="Hello World" tools={tools} />
      <VisualBell direction="bottom-left" content="Hello World" tools={tools} />
      <VisualBell direction="bottom" content="Hello World" tools={tools} />
      <VisualBell
        direction="bottom-right"
        content="Hello World"
        tools={tools}
      />
    </div>
  );
});