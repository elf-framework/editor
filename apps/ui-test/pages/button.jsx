import { start } from "@elf/sapa";
import { Button } from "@elf/ui";
import "@elf/ui/style.css";

start(function () {
  return (
    <div>
      <Button>Hello</Button>
      <Button type="primary">Primary</Button>
      <Button type="primary" shape="round">
        Primary
      </Button>
      <Button type="primary" shape="circle">
        P
      </Button>
      <Button size="large">Red</Button>
      <Button>Red</Button>
      <Button size="small">Red</Button>
      <Button onClick={(e) => console.log("red", e)}>a</Button>
      <Button type="primary" disabled>
        primary
      </Button>
    </div>
  );
});
