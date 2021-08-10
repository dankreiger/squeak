#!/usr/bin/env node

const inquirer = require('inquirer');
const spawnYarnTask = require('../shared/spawn-yarn-task');

const dbDict = {
  up: 'nx run backend-restaurants-service:db-up',
  down: 'nx run backend-restaurants-service:db-down',
  seed: ' nx run backend-restaurants-service:db-seed',
  nuke: ' nx run backend-restaurants-service:db-nuke',
};

const setup = async () => {
  const choices = [
    {
      value: dbDict.up,
      name: 'start up docker containers (postgres amd pgadmin)',
    },
    {
      value: dbDict.down,
      name: 'shut down docker containers',
    },
    {
      value: dbDict.seed,
      name: 'seed database',
    },
    {
      value: dbDict.nuke,
      name: 'destroy all database data',
    },
  ];
  const { db } = await inquirer.prompt([
    {
      type: 'list',
      name: 'db',
      message: 'Which DB operator do you want to run?\n',
      choices,
    },
  ]);

  spawnYarnTask(db);
};

setup();
