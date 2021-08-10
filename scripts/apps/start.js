#!/usr/bin/env node

const { greenBright, cyan } = require('chalk');
const inquirer = require('inquirer');
const spawnYarnTask = require('../shared/spawn-yarn-task');
/**
 * @typedef {'all'|'backendRestaurantsServiceAdmin'|'backendRestaurantsService'|'mobile'|'web'} TApp
 * @const appDict
 * @type {Record<TApp, string>}
 */
const appDict = {
  all: 'all (recommended)',
  web: 'frontend-web',
  mobile: 'frontend-mobile',
  backendRestaurantsServiceAdmin: 'backend-restaurants-service-admin',
  backendRestaurantsService: 'backend-restaurants-service',
};

/**
 *
 * @param {string} label
 * @returns {string}
 */
const getYarnCmd = (label) => `nx run ${label}:serve`;

const setup = async () => {
  const choices = [
    {
      value: appDict.all,
      name: 'Fullstack (web, backend, admin) - recommended',
    },
    {
      value: appDict.web,
      name: 'Web-App (frontend)',
    },
    {
      value: appDict.mobile,
      name: 'Mobile (frontend) - NOT READY',
    },
    {
      value: appDict.backendRestaurantsService,
      name: 'Backend restaurants service',
    },
    {
      value: appDict.backendRestaurantsServiceAdmin,
      name: 'Backend restaurants service admin UI',
    },
  ];
  const { app } = await inquirer.prompt([
    {
      type: 'list',
      name: 'app',
      message: 'Which app do you want to run?\n',
      choices,
    },
  ]);

  if (app === appDict.all) {
    console.log(greenBright(`\n\nPlease wait\n`));
    console.log('Web-app:', cyan('http://localhost:4200'));
    console.log('REST Api:', cyan('http://localhost:3333/api'));
    console.log('Admin:', cyan('http://localhost:3334'));
    // concurrent start handled in project.json of the restaurants service
    // would be better to move it to a shared config, or just do the concurrent start right here in this script.
    spawnYarnTask(['serve']);
  } else {
    let appType = 'frontend';
    if (app.length > 1) {
      if (app.includes('backend')) {
        appType = 'backend';
      }
      spawnYarnTask([getYarnCmd(app)], appType);
    }
  }
};

setup();
