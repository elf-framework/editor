import AddChartFilled from "@elf-framework/icon/esm/AddChartFilled";
import { start } from "@elf-framework/sapa";
import { Flex, IconButton } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { UILayout } from "../../layouts/UILayout";

start(function () {
  return (
    <UILayout>
      <Flex style={{ alignItems: "flex-start", gap: 10 }}>
        <IconButton style={{ flex: "none" }}>
          <AddChartFilled />
        </IconButton>
        <IconButton type="primary" style={{ flex: "none" }}>
          <AddChartFilled />
        </IconButton>
        <IconButton type="primary" shape="round" style={{ flex: "none" }}>
          <AddChartFilled />
        </IconButton>
        <IconButton type="primary" shape="circle" style={{ flex: "none" }}>
          <AddChartFilled />
        </IconButton>
        <IconButton size="large" style={{ flex: "none" }}>
          <AddChartFilled />
        </IconButton>
        <IconButton style={{ flex: "none" }}>
          <AddChartFilled />
        </IconButton>
        <IconButton size="small" style={{ flex: "none" }}>
          <AddChartFilled />
        </IconButton>
        <IconButton
          onClick={(e) => console.log("red", e)}
          style={{ flex: "none" }}
        >
          {<AddChartFilled />}
        </IconButton>
        <IconButton type="primary" disabled style={{ flex: "none" }}>
          {<AddChartFilled />}
        </IconButton>
      </Flex>
    </UILayout>
  );
});
