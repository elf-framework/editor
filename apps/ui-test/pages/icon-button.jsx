import { iconUse } from "@elf/icon";
import { start } from "@elf/sapa";
import { IconButton } from "@elf/ui";
import "@elf/ui/style.css";

start(function () {
  return (
    <div>
      <IconButton>{iconUse("artboard")}</IconButton>
      <IconButton type="primary">{iconUse("artboard")}</IconButton>
      <IconButton type="primary" shape="round">
        {iconUse("star")}
      </IconButton>
      <IconButton type="primary" shape="circle">
        {iconUse("star")}
      </IconButton>
      <IconButton size="large">{iconUse("star")}</IconButton>
      <IconButton>{iconUse("star")}</IconButton>
      <IconButton size="small">{iconUse("star")}</IconButton>
      <IconButton onClick={(e) => console.log("red", e)}>
        {iconUse("star")}
      </IconButton>
      <IconButton type="primary" disabled>
        {iconUse("star")}
      </IconButton>
    </div>
  );
});
