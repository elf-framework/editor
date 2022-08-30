import VerifiedOutlined from "@elf-framework/icon/VerifiedOutlined";

import "./ComponentLink.scss";

export function ComponentLink({
  icon,
  title,
  description,
  link,
  target = "_blank",
}) {
  return (
    <a class="component-link" href={link} target={target}>
      <div class="component-link-icon">
        {icon ? icon : <VerifiedOutlined />}
      </div>
      <div class="component-link-title">
        <h3 class="title">{title}</h3>
        <p class="description">{description}</p>
      </div>
    </a>
  );
}
