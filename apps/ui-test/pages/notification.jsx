import { iconUse } from "@elf-framework/icon";
import { start } from "@elf-framework/sapa";
import { Button, Notification } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

function Tools() {
  return (
    <>
      <Button onClick={() => console.log("action")}>Action</Button>
      <Button onClick={() => console.log("Dismiss")}>Dismiss</Button>
    </>
  );
}

start(function () {
  return (
    <div>
      <Notification
        icon={iconUse("artboard")}
        content="Hello World"
        tools={<Tools />}
      />
      <Notification
        direction="top"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={<Tools />}
      />
      <Notification
        direction="top-right"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={<Tools />}
      />
      <Notification
        direction="left"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={<Tools />}
      />
      <Notification
        direction="center"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={<Tools />}
      />
      <Notification
        direction="right"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={<Tools />}
      />
      <Notification
        direction="bottom-left"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={<Tools />}
      />
      <Notification
        direction="bottom"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={<Tools />}
      />
      <Notification
        direction="bottom-right"
        icon={iconUse("artboard")}
        content="Hello World"
        tools={<Tools />}
      />
    </div>
  );
});
