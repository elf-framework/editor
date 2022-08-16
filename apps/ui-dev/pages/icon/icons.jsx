import * as icons from "@elf-framework/icon";
import { start } from "@elf-framework/sapa";
import { Flex, VBox } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { IconLayout } from "../../layouts/IconLayout";

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

function IconView({ Filled, Outlined, key }) {
  return (
    <Flex
      style={{
        flex: "none",
        border: "1px solid #ccc",
        padding: 10,
        width: 200,
        height: 60,
        contain: "size",
      }}
    >
      <VBox>
        <Flex>
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
        <VBox style={{ marginTop: 10 }}>
          <div>{Filled && <span>{`<${key}Filled />`}</span>}</div>
          <div>{Outlined && <span>{`<${key}Outlined />`}</span>}</div>
        </VBox>
      </VBox>
    </Flex>
  );
}

start(function () {
  return (
    <IconLayout>
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
            return <IconView Filled={Filled} Outlined={Outlined} key={key} />;
          })}
        </Flex>
      </div>
    </IconLayout>
  );
});
