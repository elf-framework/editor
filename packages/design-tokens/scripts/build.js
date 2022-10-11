const modes = [`light`, `dark`];
const transforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "color/css",
];
const { transform } = require("@divriots/style-dictionary-to-figma");
const StyleDictionary = require("style-dictionary");

const figmaTokensPluginJson = (opts) => {
  const { dictionary } = opts;
  // Transform the tokens from the style dictionary instance
  const parsedTokens = transform(dictionary.tokens);
  // Turn the object into JSON, the "2" third param is used to format indents with 2 spaces
  return JSON.stringify(parsedTokens, null, 2);
};

//
StyleDictionary.extend({
  source: [`tokens/**/!(*.${modes.join(`|*.`)}).js*`],
  format: {
    // Define a custom format using our transformer
    figmaTokensPluginJson,
  },
  platforms: {
    ts: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          destination: "es/tokens.js",
          format: "javascript/es6",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
        {
          destination: "es/tokens.d.ts",
          format: "typescript/es6-declarations",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },

        {
          destination: "module/tokens.js",
          format: "javascript/module",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
        {
          destination: "module/tokens.d.ts",
          format: "typescript/module-declarations",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      buildPath: "dist/",
      transforms: ["attribute/cti", "name/cti/pascal", "color/hex"],
      files: [
        {
          destination: "tokens.json",
          format: "json/nested",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
        {
          destination: "umd/tokens.js",
          format: "javascript/umd",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
      ],
    },
    json: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          destination: "figma-tokens.json",
          format: "figmaTokensPluginJson",
        },
      ],
    },
    css: {
      transforms,
      buildPath: "dist/",
      files: [
        {
          destination: "css/tokens.css",
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

// building dark mode
StyleDictionary.extend({
  // Using the include array so that dark mode token overrides don't show warnings
  include: [`tokens/**/!(*.${modes.join(`|*.`)}).js*`],
  source: [`tokens/**/*.dark.js*`],
  // ... skipping configuration above
  format: {
    // Define a custom format using our transformer
    figmaTokensPluginJson,
  },
  platforms: {
    js: {
      buildPath: "dist/",
      transforms: ["attribute/cti", "name/cti/pascal", "color/hex"],
      files: [
        {
          destination: "tokens.dark.json",
          format: "json/nested",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
        {
          destination: "umd/tokens.dark.js",
          format: "javascript/umd",
          options: {
            // Look here 👇
            outputReferences: true,
          },
        },
      ],
    },
    json: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          destination: "figma-tokens.dark.json",
          format: "figmaTokensPluginJson",
        },
      ],
    },
    css: {
      transforms,
      buildPath: "dist/",
      files: [
        {
          destination: `css/tokens.dark.css`,
          format: `css/variables`,
          // only outputting the tokens from files with '.dark' in the filepath
          filter: (token) => token.filePath.indexOf(`.dark`) > -1,
          options: {
            outputReferences: true,
            selector: ".theme-dark",
          },
        },
      ],
    },
    //...
  },
}).buildAllPlatforms();
