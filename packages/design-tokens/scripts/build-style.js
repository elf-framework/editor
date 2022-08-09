const modes = [`light`, `dark`];
const transforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "color/css",
];
const StyleDictionary = require("style-dictionary");

function makeFontWeightStyle(prop) {
  return `
.font-weight-${prop.value} {
    font-weight: ${prop.value};
};`;
}

function makeColorStyle(prop) {
  let cssField = "";
  switch (prop.attributes.type) {
    case "text":
      cssField = "color";
      break;
    case "background":
      cssField = "background-color";
      break;
    case "border":
      cssField = "border-color";
      break;
    case "fill":
      cssField = "fill";
      break;
    case "stroke":
      cssField = "stroke";
      break;
    default:
      return "";
  }

  return `
.${prop.name} {
  ${cssField}: ${prop.value};
};`;
}

StyleDictionary.extend({
  source: [`tokens/**/!(*.${modes.join(`|*.`)}).js*`],
  ignore: [`*component*`],
  format: {
    "css/style": ({ dictionary }) => {
      return `
    ${dictionary.allProperties
      .map((prop) => {
        switch (prop.attributes.category) {
          case "image":
            break;
          case "weight":
            return makeFontWeightStyle(prop);

          case "color":
            return makeColorStyle(prop);
          default:
            break;
        }
      })
      .filter(Boolean)
      .join("\n")}
    `;
    },
  },
  platforms: {
    css: {
      transforms,
      buildPath: "dist/",
      files: [
        {
          destination: "css/style.css",
          format: "css/style",
        },
      ],
    },
  },
}).buildAllPlatforms();
