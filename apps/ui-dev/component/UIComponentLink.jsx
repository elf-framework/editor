import VerifiedOutlined from "@elf-framework/icon/VerifiedOutlined";

import { ComponentLink } from "./ComponentLink";
import "./ComponentLink.scss";

export function UIComponentLink({ link, target = "_blank" }) {
  return (
    <ComponentLink
      icon={<VerifiedOutlined />}
      title={"UI Component"}
      description={"Sapa"}
      link={link}
      target={target}
    />
  );
}
