import iconList from "./icon/icons_list";

export function iconUse(name) {
  if (!name) return "";

  if (!iconList.icons[name]) {
    return name;
  }

  return iconList.icons[name];
}

export function iconUseForPath(pathString, opt = { width: 24, height: 24 }) {
  return /*html*/ `
    <svg viewBox="0 0 ${opt.width} ${
    opt.height
  }" xmlns="http://www.w3.org/2000/svg">
      <path d="${pathString}" style="fill:${opt.fill || "transparent"};stroke:${
    opt.stroke || "white"
  }" stroke-width="1" />
    </svg>
  `;
}

export function iconMake(svgString, opt = { width: 24, height: 24 }) {
  return /*html*/ `
    <svg viewBox="0 0 ${opt.width} ${opt.height}" xmlns="http://www.w3.org/2000/svg">
      ${svgString}
    </svg>
  `;
}

export function iconBlank() {
  return iconMake(
    /*html*/ `<path d="M0 0h24v24H0z" fill="none" fill-opacity="0"/>`
  );
}

export const registIcon = iconList.registIcon;
export const icons = iconList.icons;
