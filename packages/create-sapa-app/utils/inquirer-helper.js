import inquirer from "inquirer";

async function getProjectName() {
  const prompt = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Project name",
      default: "my-app",
    },
  ]);
  return prompt.projectName;
}

async function getTemplateName() {
  const prompt = await inquirer.prompt([
    {
      type: "list",
      name: "templateName",
      message: "Template name",
      default: "js-sapa",
      choices: ["js-sapa", "ts-sapa"],
    },
  ]);
  return prompt.templateName;
}

export default { getProjectName, getTemplateName };
