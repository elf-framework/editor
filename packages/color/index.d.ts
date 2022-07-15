declare module "@elf-framework/color" {
  export function isColorName(name: string): boolean;

  export function getColorByName(name: string): string;

  export function randomNumber(min: number, max: number): number;

  export function randomByCount(count: number): number[];

  export type ColorType =
    | "rgb"
    | "rgba"
    | "hex"
    | "hsl"
    | "hsla"
    | "hsv"
    | "hsva"
    | "hwb"
    | "hwba"
    | "cmyk"
    | "cmyka"
    | "lab"
    | "laba"
    | "lch"
    | "lcha"
    | "xyz"
    | "xyza"
    | "ansi"
    | "ansi256"
    | "ansi16m"
    | "ansi16m-fg"
    | "ansi16m-bg"
    | "ansi16m-sp"
    | "ansi16m-ex"
    | "ansi16m-fg-bg"
    | "ansi16m-sp-ex"
    | "ansi16m-ex-fg"
    | "ansi16m-ex-bg"
    | "ansi16m-ex-sp"
    | "ansi16m-fg-bg-sp"
    | "ansi16m-ex-fg-bg"
    | "ansi16m-ex-fg-bg-sp";

  export type RGB = {
    r: number;
    g: number;
    b: number;
  };

  export type RGBA = RGB & {
    a?: number;
  };

  export type HSL = {
    h: number;
    s: number;
    l: number;
  };

  export type HSLA = HSL & {
    a?: number;
  };

  export type HSV = {
    h: number;
    s: number;
    v: number;
  };

  export type HSVA = HSV & {
    a?: number;
  };

  export type LAB = {
    l: number;
    a: number;
    b: number;
  };

  export type XYZ = {
    x: number;
    y: number;
    z: number;
  };

  export type CMYK = {
    c: number;
    m: number;
    y: number;
    k: number;
  };

  export type YCrCb = {
    y: number;
    cb: number;
    cr: number;
  };

  export function random(): RGB;

  export function randomRGBA(): RGBA;

  export function format(
    obj: RGBA | HSLA,
    type: ColorType,
    defaultColor?: string
  ): string;

  export function formatWithoutAlpha(
    obj: RGBA | HSLA,
    type: ColorType,
    defaultColor: string
  ): string;

  export function hex(obj: RGBA | number[]): string;
  export function rgb(obj: RGB | RGBA): string;
  export function hsl(obj: HSLA | HSL): string;

  export function CMYKtoRGB(c: number, m: number, y: number, k: number): RGB;
  export function HUEtoRGB(p: number, q: number, t: number): number;
  export function HSLtoHSV(h: number, s: number, l: number): HSV;
  export function HSLtoRGB(h: number, s: number, l: number): RGB;

  export function XYZtoRGB(x: number, y: number, z: number): RGB;
  export function LABtoXYZ(l: number, a: number, b: number): XYZ;
  export function XYZtoLAB(x: number, y: number, z: number): LAB;
  export function LABtoRGB(l: number, a: number, b: number): RGB;
  export function RGBtoHSV(r: number, g: number, b: number): HSV;
  export function RGBtoCMYK(r: number, g: number, b: number): CMYK;
  export function RGBtoHSL(r: number, g: number, b: number): HSL;
  export function brightness(r: number, g: number, b: number): number;
  export function RGBtoYCrCb(r: number, g: number, b: number): YCrCb;
  export function RGBtoXYZ(r: number, g: number, b: number): XYZ;
  export function RGBtoLAB(r: number, g: number, b: number): LAB;
  export function YCrCbtoRGB(
    y: number,
    cr: number,
    cb: number,
    bit: number
  ): RGB;

  export function HSVtoHSL(h: number, s: number, v: number): HSL;

  export function interpolateRGBObject(
    startColor: string,
    endColor: string,
    t: number
  ): RGBA;

  export function scale(scale: string[], count: number): string[];

  export function blend(
    startColor: string,
    endColor: string,
    ratio: number,
    format: ColorType
  ): string;

  export function mix(
    startColor: string,
    endColor: string,
    ratio: number,
    format: ColorType
  ): string;

  export function contrast(color: string): number;
  export function contrastColor(color: string): number;

  export function isColor(str: string): boolean;

  export function parse(
    str: string | number
  ): RGB | RGBA | HSL | HSLA | CMYK | XYZ | LAB | YCrCb | HSV | HSVA;
}
