const modes = [`light`, `dark`];
const transforms = [
  "attribute/cti",
  "name/cti/kebab",
  "time/seconds",
  "content/icon",
  "color/css",
];
const StyleDictionary = require("style-dictionary");
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

function makeFontWeightStyle(prop) {
  return `
.font-weight-${prop.value} {
    font-weight: ${prop.value};
};`;
}

function makeSpacingStyle(prop) {
  const { item, type } = prop.attributes;

  if (item) {
    return `.padding-${item} {
  padding: ${prop.value};
}

.margin-${item} {
  margin: ${prop.value};
}`;
  }

  return `.padding-${type} {
    padding: ${prop.value};
}
.margin-${type} {
  margin: ${prop.value};
}`;
}

function makeGapStyle(prop) {
  return `.${prop.name} { gap: ${prop.value}; }`;
}

function makeShadowStyle(prop) {
  return `.${prop.name} { box-shadow: ${prop.value}; }`;
}

function makeColumnStyle(prop) {
  return `.${prop.name} { grid-template-columns: ${prop.value}; }`;
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
      return `
.${prop.name} { color: ${prop.value}; }
.background-${prop.name} { background-color: ${prop.value}; }`;
  }

  return `
.${prop.name} { ${cssField}: ${prop.value}; }`;
}

StyleDictionary.extend({
  source: [`tokens/**/!(*.${modes.join(`|*.`)}).js*`],
  ignore: [`*component*`],
  format: {
    "css/style": ({ dictionary, file, options }) => {
      return `
${fileHeader({ file })}
${dictionary.allProperties
  .map((prop) => {
    switch (prop.attributes.category) {
      case "shadow":
        return makeShadowStyle(prop);
      case "gap":
        return makeGapStyle(prop);
      case "column":
        return makeColumnStyle(prop);
      case "spacing":
        return makeSpacingStyle(prop);
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
