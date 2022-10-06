/* eslint-disable no-undef */
import chalk from "chalk";
import { program } from "commander";

import path from "path";

// import fileHelper from "./utils/file-helper.js";
import inquirerHelper from "./utils/inquirer-helper.js";

async function init() {
  console.log();
  console.log(chalk.blue("create sapa project"));
  console.log();

  program
    .name("create-sapa-app")
    .description("create sapa app")
    .parse(process.argv);

  try {
    const projectName = await inquirerHelper.getProjectName();
    const templateName = await inquirerHelper.getTemplateName();

    const root = path.resolve(projectName);
    const appName = path.basename(root);

    const options = {
      projectName,
      templateName,
      root,
      appName,
    };

    // 1. root 디렉토리 체크 및 생성
    // 2. template 디렉토리 복사
    // 3. package.json 수정
    // 4. 실행가이드 안내

    console.log(options);
  } catch (e) {
    console.log(e);
  }
}

export { init };
