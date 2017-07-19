const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const archy = require('archy');
const EOL = require('os').EOL;
const spawn = require('../utils/spawn');

module.exports = program => program.command('setup')
  .description('Set up the current directory as an Aurora project.')
  .action(() => {
    console.log(EOL);
    console.log(chalk.yellow('Beginning Aurora project setup.'));

    const dirs = [
      'src/js',
      'src/sass',
      'src/components'
    ];

    Promise.all(dirs.map(dir => fs.ensureDir(path.resolve(process.cwd(), dir)))).then(() => {
      return fs.pathExists(path.resolve(process.cwd(), 'webpack.config.js'));
    })
    .then(webpackConfigExists => {
      if (!webpackConfigExists) {
        // Copy across the webpack file.
        const webpackConfigSource = path.resolve(__dirname, '../../bin/templates/webpack.config.js');
        const webpackConfigDestination = path.resolve(process.cwd(), 'webpack.config.js');

        return fs.copy(webpackConfigSource, webpackConfigDestination);
      }
    })
    .then(() => fs.pathExists(path.resolve(process.cwd(), '.babelrc')))
    .then(babelRcExists => {
      if (!babelRcExists) {
        // Create .babelrc file.
        return fs.writeJSON(path.resolve(process.cwd(), '.babelrc'), { presets: ['es2015'] }, { spaces: 2 });
      }
    })
    .then(() => fs.pathExists(path.resolve(process.cwd(), 'src/sass/app.scss')))
    .then(appScssExists => {
      if (!appScssExists) {
        const appScssSource = path.resolve(__dirname, '../../bin/templates/app.scss');
        const appScssDestination = path.resolve(process.cwd(), 'src/sass/app.scss');

        return fs.copy(appScssSource, appScssDestination);
      }
    })
    .then(() => fs.pathExists(path.resolve(process.cwd(), 'src/js/app.js')))
    .then(appJsExists => {
      if (!appJsExists) {
        const appJsSource = path.resolve(__dirname, '../../bin/templates/app.js');
        const appJsDestination = path.resolve(process.cwd(), 'src/js/app.js');

        return fs.copy(appJsSource, appJsDestination);
      }
    })
    .then(() => fs.pathExists(path.resolve(process.cwd(), 'src/components/App.vue')))
    .then(appVueExists => {
      if (!appVueExists) {
        const appVueSource = path.resolve(__dirname, '../../bin/templates/App.vue');
        const appVueDestination = path.resolve(process.cwd(), 'src/components/App.vue');

        return fs.copy(appVueSource, appVueDestination);
      }
    })
    .then(() => fs.pathExists(path.resolve(process.cwd(), 'package.json')))
    .then(packageJsonExists => {
      if (!packageJsonExists) {
        // Create a new package.json file.
        return fs.writeJSON(path.resolve(process.cwd(), 'package.json'), { name: 'new-aurora-project', version: '0.1.0' }, { spaces: 2 });
      }
    })
    .then(() => {
      const devDependencies = [
        'babel-core',
        'babel-loader',
        'babel-polyfill',
        'babel-preset-es2015',
        'css-loader',
        'extract-text-webpack-plugin@^3.0.0',
        'file-loader',
        'node-sass',
        'sass-loader',
        'style-loader',
        'uglifyjs-webpack-plugin@^0.4.6',
        'vue-loader',
        'vue-template-compiler',
        'webpack@^3.3.0'
      ];

      console.log(chalk.yellow('Installing dependencies.'));

      return spawn('npm', ['install', '--save-dev', ...devDependencies]);
    })
    .then(() => {
      const dependencies = [
        'aurora-framework',
        'vue'
      ];

      return spawn('npm', ['install', '--save', ...dependencies])
    })
    .then(() => {
      const tree = archy({
        nodes: [
          {
            label: 'src',
            nodes: [
              { label: 'components', nodes: [
                { label: 'App.vue' }
              ] },
              { label: 'js', nodes: [
                { label: 'app.js' }
              ] },
              { label: 'sass', nodes: [
                { label: 'app.scss' }
              ] }
            ]
          },
          { label: '.babelrc' },
          { label: 'package.json' },
          { label: 'webpack.config.js' }
        ]
      });

      console.log(EOL);
      console.log(chalk.green('Aurora setup complete!'));
      console.log(chalk.green('The following project structure has been created for you:'));
      console.log(tree);
    })
    .catch(err => console.error(chalk.red(err)));
  });