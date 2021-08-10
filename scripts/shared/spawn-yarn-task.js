#!/usr/bin/env node

const { spawn, exec } = require('child_process');
const { yellow } = require('chalk');

const { compose, toString } = require('ramda');
const log = compose(console.log, toString);

/**
 * @typedef {'backend'|'frontend'|'fullstack'} TAppType
 *
 * @param {string[]} cmd - array of unjoined cli command
 * @param {TAppType} appType
 */
const spawnYarnTask = (cmd, appType) => {
  const serveCmd = spawn('sh', ['-c', `yarn ${cmd}`], {
    env: { ...process.env, NX_APP_TYPE: appType },
  });
  serveCmd.stdout.on('data', log);
  serveCmd.stderr.on('data', (_) => {
    if (appType !== 'frontend') {
      const errMessage = `Is your database running?
        If not, please make sure you have Docker running locally, and then try:
        ${yellow('yarn db-up')}
        If you are trying to run a backend app, please ensure docker is running. See README\
        `;

      exec(
        'docker ps -a | grep postgres | grep Up ',
        (error, stdout, stderr) => {
          if (error) {
            console.error(errMessage);
            return;
          }
          if (stderr) {
            console.error(errMessage);
            return;
          }
        }
      );
    }
  });

  serveCmd.on('exit', (code) =>
    console.log(`child process exited with code ${code.toString()}`)
  );
};

module.exports = spawnYarnTask;
