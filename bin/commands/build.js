const path = require('path');
const spawn = require('../utils/spawn');

module.exports = program => program.command('build [options]')
  .description('Build the application.')
  .option('-p, --production', 'Perform the build in production mode.')
  .action((env, opts) => {
    const webpackPath = path.resolve(process.cwd(), 'node_modules/.bin/webpack');

    spawn(webpackPath, [
      opts.production ? '--env=prod' : null
    ], {
      NODE_ENV: opts.production ? 'production' : 'development'
    });
});