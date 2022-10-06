import fs from "fs";
import path from "path";

export default {
  existsSync: (localPath) => {
    return fs.existsSync(localPath);
  },
  mkdirSync: (localPath) => {
    return fs.mkdirSync(localPath);
  },
  currentDir: () => {
    // eslint-disable-next-line no-undef
    return process.cwd();
  },
  libDir: () => {
    return path.resolve();
  },
};
