const path = require('path');
const spawn = require('../utils/spawn');

module.exports = program => program.command('build [options]')
  .description('Build the application.')
  .option('-p, --production', 'Perform the build in production mode.')
  .action((env, opts) => {
    const webpackPath = path.resolve(process.cwd(), 'node_modules/.bin/webpack');
    const webpackConfigPath = path.resolve(process.cwd(), 'webpack.config.js');

    spawn(webpackPath, [
      opts.production ? '--env=prod' : null,
      '--config',
      webpackConfigPath
    ], {
      NODE_ENV: opts.production ? 'production' : 'development'
    });
});