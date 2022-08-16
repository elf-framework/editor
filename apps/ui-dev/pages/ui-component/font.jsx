import { start } from "@elf-framework/sapa";
import { Flex } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../layouts/UILayout";

start(function () {
  return (
    <UILayout>
      <h1
        onClick={(e) => console.log(e)}
        style={{
          backgroundColor: "yellow",
        }}
      >
        Flex
      </h1>
      <Flex stack={true}>
        <div style="background-color: yellow;border: 1px solid black;">1</div>
        <div style="background-color: yellow;border: 1px solid black;">2</div>
        <div style="background-color: yellow;border: 1px solid black;">3</div>
      </Flex>
      <div>&nbsp;</div>
      <Flex style={{ gap: 10 }}>
        <div style="background-color: yellow;border: 1px solid black;">1</div>
        <div style="background-color: yellow;border: 1px solid black;">2</div>
        <div style="background-color: yellow;border: 1px solid black;">3</div>
      </Flex>
    </UILayout>
  );
});
