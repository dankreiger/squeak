#!/usr/bin/env node

const inquirer = require('inquirer');
const spawnYarnTask = require('../shared/spawn-yarn-task');

const appsDict = {
  web_ui: 'nx run frontend-shared-ui:storybook',
};

const setup = async () => {
  const choices = [
    {
      value: appsDict.web_ui,
      name: 'Shared frontend component Library',
    },
  ];
  const { libs } = await inquirer.prompt([
    {
      type: 'list',
      name: 'libs',
      message: 'Which library do you want to run?\n',
      choices,
    },
  ]);

  spawnYarnTask(libs);
};

setup();
