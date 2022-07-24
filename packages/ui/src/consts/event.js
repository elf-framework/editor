import { AFTER } from "@elf-framework/sapa";

export const FIRSTMOVE = (method = "move") => {
  return AFTER(`bodyMouseFirstMove ${method}`);
};

export const MOVE = (method = "move") => {
  return AFTER(`bodyMouseMove ${method}`);
};

export const END = (method = "end") => {
  return AFTER(`bodyMouseUp ${method}`);
};
