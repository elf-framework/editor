module.exports = {
  ...require("@elf/config/eslint-preset"),
  settings: {
    "import/resolver": {
      jsconfig: {
        config: "jsconfig.json",
      },
    },
  },
};
