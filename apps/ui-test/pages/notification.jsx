import { start } from "@elf-framework/sapa";
import "@elf-framework/ui/style.css";
import { Button, Notification } from "@elf-framework/ui";
import { iconUse } from "@elf-framework/icon";

start(function () {

  const tools = [
    <Button onClick={() => console.log("action")}>Action</Button>,
    <Button onClick={() => console.log("Dismiss")}>Dismiss</Button>,
  ]

  return (
    <div>
      <Notification
        icon={iconUse("artboard")}
        content="Hello World"
        tools={tools}
      />
            <Notification
        direction="top"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={tools}
      />
            <Notification
        direction="top-right"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={tools}
      />
            <Notification
        direction="left"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={tools}
      />
            <Notification
        direction="center"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={tools}
      />
            <Notification
        direction="right"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={tools}
      />
            <Notification
        direction="bottom-left"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={tools}
      />
            <Notification
        direction="bottom"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={tools}
      />
            <Notification
        direction="bottom-right"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={tools}
      />
    </div>
  );
});
