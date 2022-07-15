import fs from "fs";
import path from "path";

import parseXml from "@rgrove/parse-xml";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const files = {

};



const filteredTheme = {
  'outlined' : true,
  'filled': true
}
const filterCategoryList = ['content', 'editor', 'action', 'navigation']

// how to get material icon list 
// https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true
function getMaterialIconList() {
  const iconJSON = JSON.parse(fs.readFileSync("./data/icon.json", { encoding: 'utf8'}));

  const list = iconJSON.icons.filter(it => it.categories.some( c => filterCategoryList.includes(c)));

  return list.map(it => {
    files[it.name] = true;    
    return {
      name: it.name, 
      categories: it.categories,
    }
  });
}


getMaterialIconList();


const ROOT_DIR = "../../node_modules/@material-design-icons/svg";
const SRC_DIR = "./src";

const ICONS_DIR = SRC_DIR + "/icons"


function umdTemplate(fullName, json) {
  return `(function(e,n){typeof exports=="object"&&typeof module!="undefined"?module.exports=n(require("@elf-framework/sapa"),require("../components/SvgIcon")):typeof define=="function"&&define.amd?define(["@elf-framework/sapa","../components/SvgIcon"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,e["icons/${fullName}"]=n(e.sapa,e.SvgIcon))})(this,function(e,n){"use strict";const t=(c={})=>n.SvgIcon(${json},c);return t.displayName="${fullName}",t});`
}

function esmTemplate(fullName, json) {
  return `
import { SvgIcon } from "../components/SvgIcon";
const ${fullName} = (props = {}) => {
  return SvgIcon(${json}, props);
};
${fullName}.displayName = "${fullName}";
export { ${fullName} as default };
  `
}

function srcTemplate(fullName, json) {
  return `
// GENERATE BY ./scripts/generator.js
// DON NOT EDIT IT MANUALLY  
import {SvgIcon} from "../components/SvgIcon";

const  ${fullName} = (props = {}) => {
    return SvgIcon(${json}, props);
}

${fullName}.displayName = "${fullName}";

export default ${fullName};
          `;
}

const rootFiles = []

console.time("generate");

function makeDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

}

function elementToAbstractNode(el) {
  const { name: tag, attributes = {}, children } = el;

  return { tag, attributes: { ...attributes }, children: children.map(elementToAbstractNode) }
}

const indexFiles = [];

fs.readdirSync(ROOT_DIR, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .forEach((dir) => {
    //   const local = path.join(ROOT_DIR, dir);

    const theme = dir.name;

    if (!filteredTheme[theme]) {
      return;
    }

    const localDir = path.join(ROOT_DIR, dir.name);
    const srcDir = path.join(ICONS_DIR);


    rootFiles.push(dir.name);

    let typeName = capitalizeFirstLetter(dir.name);
    typeName = typeName
      .split("-")
      .map((it) => capitalizeFirstLetter(it))
      .join("");

    makeDirectory(srcDir);


    const localList = fs.readdirSync(localDir);


    localList.forEach((file) => {
      let filename = file.replace(".svg", "");
      let componentName = filename;

      if (/^[0-9]/.test(filename.charAt(0))) {
        componentName = "N" + filename;
      }
      // console.log(filename);


      if (!files[filename]) {
        return;
      }


      const sourceFile = path.join(localDir, file);
      const targetFileName = componentName
        .split(/[_-]/g)
        .map((it) => capitalizeFirstLetter(it))
        .join("");
      const iconName = targetFileName + typeName;
      const targetFile = path.join(srcDir, iconName + ".jsx");


      const source = fs.readFileSync(sourceFile, "utf8");

      // create data 
      const json = elementToAbstractNode(parseXml(source)).children[0];
      const data = JSON.stringify({
        name: targetFileName,
        theme,
        icon: json
      });

      // source 
      const template = srcTemplate(iconName, data);
      fs.writeFileSync(targetFile, template);


      indexFiles.push(`export { default as ${iconName} } from "./${iconName}";`);
    });

  });

fs.writeFileSync(SRC_DIR + "/icons/index.js", indexFiles.join("\n") + "\n");


console.timeEnd("generate");