// It is handy to not have those transformations while we developing
if (process.env.NODE_ENV === "production") {
  module.exports = {
    plugins: [
      require("autoprefixer"),
      require("cssnano"),
      require("postcss-sorting")({
        order: [
          "custom-properties",
          "dollar-variables",
          "declarations",
          "at-rules",
          "rules",
        ],

        "properties-order": "alphabetical",

        "unspecified-properties-position": "bottom",
      }),
    ],
  };
} else if (process.env.NODE_ENV === "development") {
  module.exports = {
    plugins: [
      require("autoprefixer"),
      require("postcss-sorting")({
        order: [
          "custom-properties",
          "dollar-variables",
          "declarations",
          "at-rules",
          "rules",
        ],

        "properties-order": "alphabetical",

        "unspecified-properties-position": "bottom",
      }),
    ],
  };
}
