module.exports = {
  ...require("@elf-framework/config/eslint-preset"),
  settings: {
    "import/resolver": {
      jsconfig: {
        config: "jsconfig.json",
      },
    },
  },
};
