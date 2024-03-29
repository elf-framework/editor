const SVG_ELEMENTS = {
  svg: true,
  g: true,
  path: true,
  rect: true,
  circle: true,
  ellipse: true,
  line: true,
  polyline: true,
  polygon: true,
  text: true,
  tspan: true,
  textPath: true,
  tref: true,
  defs: true,
  clipPath: true,
  mask: true,
  pattern: true,
  image: true,
  linearGradient: true,
  radialGradient: true,
  stop: true,
  animate: true,
  animateMotion: true,
  animateColor: true,
  animateTransform: true,
  mpath: true,
  set: true,
  use: true,
  desc: true,
  metadata: true,
  title: true,
  marker: true,
  symbol: true,
  view: true,
  foreignObject: true,
  switch: true,
  link: true,
};

const SVG_ELEMENTS_LIST = {};
Object.keys(SVG_ELEMENTS).forEach((key) => {
  SVG_ELEMENTS_LIST[key.toLowerCase()] = true;
  SVG_ELEMENTS_LIST[key.toUpperCase()] = true;
});

export function isSVG(tagName) {
  return !!SVG_ELEMENTS[tagName];
}
