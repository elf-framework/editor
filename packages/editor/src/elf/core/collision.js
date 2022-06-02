import { vec3 } from "gl-matrix";

import { Length } from "elf/editor/unit/Length";


/**
 * 사각형과 사각형 충돌 체크
 *
 * @param {number} rx1
 * @param {number} ry1
 * @param {number} rw1
 * @param {number} rh1
 * @param {number} rx2
 * @param {number} ry2
 * @param {number} rw2
 * @param {number} rh2
 */
export function rectRect(rx1, ry1, rw1, rh1, rx2, ry2, rw2, rh2) {
  return (
    rx1 + rw1 >= rx2 && rx1 <= rx2 + rw2 && ry1 + rh1 >= ry2 && ry1 <= ry2 + rh2
  );
}

export class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get left() {
    return this.x;
  }

  get right() {
    return this.x + this.width;
  }

  get top() {
    return this.y;
  }

  get bottom() {
    return this.y + this.height;
  }

  get centerX() {
    return this.x + this.width / 2;
  }

  get centerY() {
    return this.y + this.height / 2;
  }

  get center() {
    return [this.centerX, this.centerY];
  }

  get topLeft() {
    return [this.left, this.top];
  }

  get topRight() {
    return [this.right, this.top];
  }

  get bottomLeft() {
    return [this.left, this.bottom];
  }

  get bottomRight() {
    return [this.right, this.bottom];
  }

  get vertices() {
    return [this.topLeft, this.topRight, this.bottomLeft, this.bottomRight];
  }

  intersect(rect) {
    return intersectRectRect(this, rect);
  }
}

/**
 * 두 사각형의 교차점 구하기
 *
 * @param {Rect} rect1
 * @param {Rect} rect2
 * @returns {vec3[]}
 */
export function intersectRectRect(rect1, rect2) {
  const minRectX = Math.min(rect1.x, rect2.x);
  const minRectY = Math.min(rect1.y, rect2.y);

  const rect1Verties = rectToVerties(
    rect1.x - minRectX,
    rect1.y - minRectY,
    rect1.width,
    rect1.height
  );
  const rect2Verties = rectToVerties(
    rect2.x - minRectX,
    rect2.y - minRectY,
    rect2.width,
    rect2.height
  );

  const startPoint = [
    Math.max(rect1Verties[0][0], rect2Verties[0][0]),
    Math.max(rect1Verties[0][1], rect2Verties[0][1]),
    Math.max(rect1Verties[0][2], rect2Verties[0][2]),
  ];

  const endPoint = [
    Math.min(rect1Verties[2][0], rect2Verties[2][0]),
    Math.min(rect1Verties[2][1], rect2Verties[2][1]),
    Math.min(rect1Verties[2][2], rect2Verties[2][2]),
  ];

  const minX = Math.min(startPoint[0], endPoint[0]);
  const minY = Math.min(startPoint[1], endPoint[1]);
  const maxX = Math.max(startPoint[0], endPoint[0]);
  const maxY = Math.max(startPoint[1], endPoint[1]);

  return new Rect(minX + minRectX, minY + minRectY, maxX - minX, maxY - minY);
}

function parseStyle(transformOrigin = "50% 50% 0px") {
  const origins = transformOrigin
    .trim()
    .split(" ")
    .filter((it) => it.trim());

  let parsedTransformOrigin = null;

  if (origins.length === 1) {
    parsedTransformOrigin = [origins[0], origins[0]].map((it) =>
      Length.parse(it)
    );
  } else {
    parsedTransformOrigin = origins.map((it) => Length.parse(it));
  }

  return parsedTransformOrigin;
}

function transformScale(transformOrigin, width, height) {
  let parsedTransformOrigin = parseStyle(transformOrigin);
  // if (isNaN(width) || isNaN(height)) {
  //   throw new Error(width);
  // }

  if (width === 0 && height === 0) {
    return [0, 0, 0];
  }

  const originX = parsedTransformOrigin[0].toPx(width).value;
  const originY = parsedTransformOrigin[1].toPx(height).value;
  const originZ = parsedTransformOrigin[2].value;

  return [originX, originY, originZ];
}

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 * @param {string} origin
 * @returns {vec3[]}
 */
export function rectToVerties(x, y, width, height, origin = "50% 50% 0px") {
  const center = transformScale(origin, width, height);

  return [
    [x, y, 0], // top , left
    [x + width, y, 0], // top , right
    [x + width, y + height, 0], // bottom , right
    [x, y + height, 0], // bottom , left
    [x + center[0], y + center[1], 0], // transform origin
  ];
}

export function rectToVertiesForArea(x, y, width, height) {
  return rectToVerties(x, y, width, height);
}


/**
 * verties -> rect
 *
 * @param {vec3[]} verties
 * @param {boolean} [hasLength=true]
 * @returns {Rect} rectangle
 */
export function vertiesToRectangle(verties) {
  const x = verties[0][0];
  const y = verties[0][1];
  const width = vec3.dist(verties[0], verties[1]);
  const height = vec3.dist(verties[0], verties[3]);

  return new Rect(x, y, width, height);
}


export function toRectVerties(verties) {
  let minX = Number.MAX_SAFE_INTEGER;
  let minY = Number.MAX_SAFE_INTEGER;
  let maxX = Number.MIN_SAFE_INTEGER;
  let maxY = Number.MIN_SAFE_INTEGER;

  const xList = [];
  const yList = [];

  verties.forEach((vector) => {
    xList.push(vector[0]);
    yList.push(vector[1]);
  });

  minX = Math.min.apply(Math, xList);
  maxX = Math.max.apply(Math, xList);
  minY = Math.min.apply(Math, yList);
  maxY = Math.max.apply(Math, yList);

  if (minX === Number.MAX_SAFE_INTEGER) minX = 0;
  if (minY === Number.MAX_SAFE_INTEGER) minY = 0;
  if (maxX === Number.MIN_SAFE_INTEGER) maxX = 0;
  if (maxY === Number.MIN_SAFE_INTEGER) maxY = 0;

  return rectToVerties(minX, minY, maxX - minX, maxY - minY);
}
