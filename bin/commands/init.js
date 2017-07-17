const spawn = require('../utils/spawn');

module.exports = program => program.command('init')
  .description('Start a new Aurora project in the current directory.')
  .action(() => {
    spawn('npm', ['install']).then(() => {
      console.log('Setup complete!');
    }).catch(code => {
      console.log(`Could not set up Aurora (error code: ${code}).`);
    });
  });