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

StyleDictionary.extend({
  source: [`tokens/**/!(*.${modes.join(`|*.`)}).js*`],
  format: {
    // Define a custom format using our transformer
    figmaTokensPluginJson: (opts) => {
      const { dictionary } = opts;
      // Transform the tokens from the style dictionary instance
      const parsedTokens = transform(dictionary.tokens);
      // Turn the object into JSON, the "2" third param is used to format indents with 2 spaces
      return JSON.stringify(parsedTokens, null, 2);
    },
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
