const modes = [`light`, `dark`];
const transforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "color/css",
]

const StyleDictionary = require("style-dictionary").extend({
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
});

StyleDictionary.buildAllPlatforms();

// building dark mode
StyleDictionary.extend({
  // Using the include array so that dark mode token overrides don't show warnings
  include: [`tokens/**/!(*.${modes.join(`|*.`)}).js*`],
  source: [`tokens/**/*.dark.js*`],
  // ... skipping configuration above
  platforms: {
    css: {
      transforms,
      buildPath: "dist/",
      files: [
        {
          destination: `variables-dark.css`,
          format: `css/variables`,
          // only outputting the tokens from files with '.dark' in the filepath
          //filter: (token) => token.filePath.indexOf(`.dark`) > -1,
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    //...
  },
}).buildAllPlatforms();

// building dark mode
StyleDictionary.extend({
  // Using the include array so that dark mode token overrides don't show warnings
  include: [`tokens/**/!(*.${modes.join(`|*.`)}).js*`],
  source: [`tokens/**/*.dark.js*`],
  // ... skipping configuration above
  platforms: {
    css: {
      transforms,
      buildPath: "dist/",
      files: [
        {
          destination: `switch-dark.css`,
          format: `css/variables`,
          // only outputting the tokens from files with '.dark' in the filepath
          filter: (token) => token.filePath.indexOf(`.dark`) > -1,
          options: {
            outputReferences: true,
            selector: ".dark",
          },
        },
      ],
    },
    //...
  },
}).buildAllPlatforms();
