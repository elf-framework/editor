// eslint-disable-next-line no-undef
const swcCore = require("@swc/core");
const PLUGIN_NAME = "vite-plugin-sapa";
const jsxRE = /\.[tj]sx$/;

// console.log(swcCore);

function getIdendifierName(ast) {
  // console.log(ast);
  if (ast.type === "VariableDeclaration") {
    return ast.declarations?.map((it) => getIdendifierName(it));
  } else if (ast.type === "VariableDeclarator") {
    return {
      name: ast.id.value,
    };
  } else if (ast.type === "FunctionDeclaration") {
    return {
      name: ast.identifier.value,
    };
  } else if (ast.type === "ExportSpecifier") {
    return {
      name: ast.orig.value,
    };
  } else if (ast.type === "FunctionExpression") {
    return {
      name: ast.identifier.value,
    };
  } else if (ast.type === "Identifier") {
    return {
      name: ast.value,
    };
  }
}

function traverse(ast, options = {}) {
  // console.log(ast);

  switch (ast.type) {
    case "ClassDeclaration":
      options.results.push({
        names: getIdendifierName(ast.identifier),
      });
      break;
    case "FunctionDeclaration":
      options.results.push({
        names: getIdendifierName(ast.identifier),
      });
      break;
    case "ExportDeclaration":
      options.results.push({
        type: "ExportDeclaration",
        names: getIdendifierName(ast.declaration),
      });
      // console.log(ast.declaration);
      break;
    case "ExportNamedDeclaration":
      options.results.push({
        type: "ExportNamedDeclaration",
        names: ast.specifiers?.map((it) => {
          return getIdendifierName(it);
        }),
      });
      break;
    case "ExportDefaultDeclaration":
      options.results.push({
        type: "ExportDefaultDeclaration",
        names: getIdendifierName(ast.decl),
      });
      break;
    case "Module":
      // console.log(ast.body);
      ast.body.forEach((it) => {
        traverse(it, options);
      });
      break;
    default:
      break;
  }
}

// eslint-disable-next-line no-undef, no-unused-vars
module.exports = function sapa(options = {}) {
  return {
    name: PLUGIN_NAME,
    async transform(code, id) {
      let transformedCode = code;
      if (jsxRE.test(id)) {
        const parsed = await swcCore.parse(code, {
          jsc: { parser: { syntax: "ecmascript" } },
        });

        const options = {
          results: [],
        };
        traverse(parsed, options);

        const names = options.results
          .map((it) => {
            return it.names;
          })
          .flat(Infinity)
          .map((it) => it.name);
        transformedCode = `

import { registerModule, renderFromRoot } from "@elf-framework/sapa";
${code};
if (import.meta.hot) {
  registerModule("${id}", {${names.join(", ")} });

  import.meta.hot.accept((m) => {
    console.log("hot reload");
    renderFromRoot();
  });
}
        `;
      }

      return transformedCode;
    },
  };
};
