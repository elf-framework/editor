import { mat4, vec2, vec3 } from "gl-matrix";

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomByCount(count = 1) {
  let arr = [];
  for (var i = 0; i < count; i++) {
    arr[arr.length] = Math.random();
  }

  return arr;
}

export function round(n, k) {
  k = typeof k === "undefined" ? 1 : k;
  return Math.round(n * k) / k;
}

export function degreeToRadian(degrees) {
  return degrees * (Math.PI / 180);
}

/**
 *
 * convert radian to degree
 *
 * @param {*} radian
 * @returns {Number} 0..360
 */
export function radianToDegree(radian) {
  var angle = radian * (180 / Math.PI);

  if (angle < 0) {
    angle = 360 + angle;
  }

  return angle;
}

export function getDist(x, y, centerX = 0, centerY = 0) {
  return vec2.distance([x, y], [centerX, centerY]);
}

export function vertiesMap(verties, transformView) {
  if (verties.length === 1) {
    return [vec3.transformMat4([], verties[0], transformView)];
  } else if (verties.length === 2) {
    return [
      vec3.transformMat4([], verties[0], transformView),
      vec3.transformMat4([], verties[1], transformView),
    ];
  } else if (verties.length === 3) {
    return [
      vec3.transformMat4([], verties[0], transformView),
      vec3.transformMat4([], verties[1], transformView),
      vec3.transformMat4([], verties[2], transformView),
    ];
  } else if (verties.length === 4) {
    return [
      vec3.transformMat4([], verties[0], transformView),
      vec3.transformMat4([], verties[1], transformView),
      vec3.transformMat4([], verties[2], transformView),
      vec3.transformMat4([], verties[3], transformView),
    ];
  } else if (verties.length === 5) {
    return [
      vec3.transformMat4([], verties[0], transformView),
      vec3.transformMat4([], verties[1], transformView),
      vec3.transformMat4([], verties[2], transformView),
      vec3.transformMat4([], verties[3], transformView),
      vec3.transformMat4([], verties[4], transformView),
    ];
  }

  return verties.map((v) => {
    return vec3.transformMat4([], v, transformView);
  });
}

export function calculateMatrix(...args) {
  const view = mat4.create();
  args.forEach((v) => {
    mat4.multiply(view, view, v);
  });

  return view;
}

export function calculateMatrixInverse(...args) {
  return mat4.invert([], calculateMatrix(...args));
}

const UUID_REG = /[xy]/g;

export function uuid() {
  var dt = new Date().getTime();
  var uuid = "xxx12-xx-34xx".replace(UUID_REG, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

export function uuidShort() {
  var dt = new Date().getTime();
  var uuid = "idxxxxxxx".replace(UUID_REG, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
