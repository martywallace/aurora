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

    const files = [
      { expected: 'src/js/app.js', body: 'app.js' },
      { expected: 'src/sass/app.scss', body: 'app.scss' },
      { expected: 'src/components/App.vue', body: 'App.vue' },
      { expected: 'webpack.config.js', body: 'webpack.config.js' },
      { expected: '.babelrc', body: { presets: ['es2015'] } },
      { expected: 'package.json', body: { name: 'new-aurora-app', version: '0.1.0' } }
    ];

    Promise.all(dirs.map(dir => fs.ensureDir(path.resolve(process.cwd(), dir))))
      .then(() => Promise.all(files.map(def => fs.exists(path.resolve(process.cwd(), def.expected)))))
      .then(exists => {
        return Promise.all(exists.map((has, index) => {
          if (has) {
            // This file already exists, do not do anything.
            return null;
          } else {
            // Create this file.
            const def = files[index];

            if (typeof def.body === 'string') {
              // Literally copy across template from the framework.
              return fs.copy(
                path.resolve(__dirname, '../../bin/templates', def.body),
                path.resolve(process.cwd(), def.expected)
              );
            } else {
              // Build a new file from JSON.
              return fs.writeJSON(path.resolve(process.cwd(), def.expected), def.body, { spaces: 2 });
            }
          }
        }));
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