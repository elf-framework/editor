import { start } from "@elf/sapa";
import { Button } from "@elf/ui";
import "@elf/ui/style.css";

start(function () {
  return (
    <div>
      <Button>Hello</Button>
      <Button type="primary">Primary</Button>
      <Button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 30px",
          borderColor: "yellow",
          borderRadius: "0px",
        }}
      >
        Red
      </Button>
      <Button onClick={(e) => console.log("red", e)}>a</Button>
      <Button
        type="primary"
        disabled
        style={{
          disabledColor: "red",
        }}
      >
        primary
      </Button>
    </div>
  );
});
