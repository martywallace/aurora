const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const pascal = require('pascal-case');
const render = require('../utils/render');

const Resources = {
  COMPONENT: 'component'
};

module.exports = program => program.command('create <resource> <name>')
  .description('Create new resources within the application.')
  .action((resource, name) => {
    if (resource === Resources.COMPONENT) {
      const source = path.resolve(__dirname, '../templates/component.vue');
      const destination = path.resolve(process.cwd(), `src/components/${pascal(name)}.vue`);

      fs.exists(destination, exists => {
        if (exists) {
          console.error(chalk.red(`Component "${pascal(name)}" already exists.`));
        } else {
          fs.readFile(source)
            .then(buffer => fs.writeFile(destination, render(buffer.toString(), { name })))
            .then(() => console.log(chalk.green(`Component "${pascal(name)}" created.`)))
            .catch(err => console.error(chalk.red(err)));
        }
      });
    } else {
      console.error(chalk.red(`Unknown resource type "${resource}".`));
    }
  });