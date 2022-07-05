// import { mat4, vec2, vec3 } from "gl-matrix";

const CLONE_FUNCTION = (obj) => JSON.parse(JSON.stringify(obj));

export function clone(obj) {
  if (typeof obj === "undefined") return undefined;

  return CLONE_FUNCTION(obj);
}

export function round(n, k) {
  k = typeof k === "undefined" ? 1 : k;
  return Math.round(n * k) / k;
}
