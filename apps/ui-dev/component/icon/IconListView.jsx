import * as icons from "@elf-framework/icon";
import { Grid } from "@elf-framework/ui";

const list = {};

Object.keys(icons).forEach((key) => {
  const name = key.replace("Filled", "").replace("Outlined", "");

  if (!list[name]) {
    list[name] = {};
  }

  if (key.includes("Filled")) {
    // eslint-disable-next-line import/namespace
    list[name].filled = icons[key];
  } else if (key.includes("Outlined")) {
    // eslint-disable-next-line import/namespace
    list[name].outlined = icons[key];
  }
});

function IconView({ Filled, Outlined, key }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        contain: "size",
        height: 80,
        fontSize: 12,
      }}
    >
      {Filled && (
        <div>
          <Filled /> {`<${key}Filled />`}
        </div>
      )}
      {Outlined && (
        <div>
          <Outlined /> {`<${key}Outlined />`}
        </div>
      )}
    </div>
  );
}

export function IconListView() {
  return (
    <Grid columns={3}>
      {Object.keys(list).map((key) => {
        const { filled: Filled, outlined: Outlined } = list[key];
        return <IconView Filled={Filled} Outlined={Outlined} key={key} />;
      })}
    </Grid>
  );
}
