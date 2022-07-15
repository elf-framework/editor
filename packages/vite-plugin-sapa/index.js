import * as swcCore from "@swc/core";
import { Options as SWCOptions } from "@swc/core";

const PLUGIN_NAME = "vite-plugin-sapa";
const jsxRE = /\.[tj]sx$/;

function traverse(ast, options = {}) {
  // console.log(ast);

  switch (ast.type) {
    case "ExportDeclaration":
      traverse(ast.declaration);
      break;
    case "Module":
    case "ClassDeclaration":
      ast.body.forEach((it) => traverse(it));
      break;
    case "ClassMethod":
      traverse(ast.function.body);
      break;
    case "BlockStatement":
      ast.stmts.forEach((it) => traverse(it));
      break;
    case "VariableDeclaration":
      ast.declarations.forEach((it) => traverse(it));
      break;
    case "ReturnStatement":
      traverse(ast.argument);
      break;
    case "CallExpression":
      if (ast.callee.value === "createElementJsx") {
        ast.arguments.forEach((it) => traverse(it.expression, { jsx: true }));
      }
      break;
    case "ObjectExpression":
      if (options.jsx) {
        const hasVariable = ast.properties.some((it) => {
          traverse(it);
          if (it.type === "KeyValueProperty") {
            // console.log(it);
            // 이변 변수가 적용된 곳 체크
            return it.value.type.includes("Literal") === false;
          }
        });

        if (!hasVariable) {
          ast.properties.push({
            type: "KeyValueProperty",
            key: {
              type: "Identifier",
              value: "pass",
              span: { start: 0, end: 0, ctxt: 0 },
              optional: false,
            },
            value: {
              type: "BooleanLiteral",
              span: { start: 0, end: 0, ctxt: 0 },
              value: true,
            },
          });
        }
      }
      break;
    case "KeyValueProperty":
      if (options.jsx) {
        if (ast.value.type.includes("Literal")) {
          traverse(ast.key, { jsx: true });
          traverse(ast.value, { jsx: true });
        }
      }
  }
}

// eslint-disable-next-line no-undef
export function sapa() {
  return {
    name: PLUGIN_NAME,
    enforce: "post",
    async transform(code, id) {
      if (jsxRE.test(id)) {
        const parsed = await swcCore.parse(code, {
          ...SWCOptions,
          jsc: { parser: { syntax: "ecmascript" } },
        });

        traverse(parsed);

        const printed = await swcCore.print(parsed);

        // console.log(code, id);
        return printed.code;
      }

      return code;
    },
  };
}
