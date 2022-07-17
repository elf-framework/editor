const modes = [`light`, `dark`];
const transforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "color/css",
];

const StyleDictionary = require("style-dictionary");

StyleDictionary.extend({
  source: [`tokens/**/!(*.${modes.join(`|*.`)}).js*`],
  platforms: {
    css: {
      transforms,
      buildPath: "dist/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms();
