import * as icons from "@elf-framework/icon";
import { start } from "@elf-framework/sapa";
import { Flex } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

const list = {};

Object.keys(icons).forEach((key) => {
  const name = key.replace("Filled", "").replace("Outlined", "");

  if (!list[name]) {
    list[name] = {};
  }

  if (key.includes("Filled")) {
    list[name].filled = icons[key];
  } else if (key.includes("Outlined")) {
    list[name].outlined = icons[key];
  }
});

start(function () {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h1>Icons</h1>
      <Flex
        wrap={true}
        style={{
          columnGap: 10,
          rowGap: 10,
          textAlign: "center",
          fontSize: 12,
        }}
      >
        {Object.keys(list).map((key) => {
          const { filled: Filled, outlined: Outlined } = list[key];
          return (
            <Flex
              style={{
                flex: "none",
                border: "1px solid #ccc",
                padding: 10,
                width: 200,
              }}
            >
              <Flex>
                <Flex>
                  {Filled && (
                    <span>
                      <Filled />
                    </span>
                  )}
                </Flex>
                <Flex>
                  {Outlined && (
                    <span>
                      <Outlined />
                    </span>
                  )}
                </Flex>
              </Flex>
              <span>{key}</span>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
});
