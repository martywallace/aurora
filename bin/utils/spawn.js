const spawn = require('child_process').spawn;

module.exports = (command, args, env = { }) => {
  const options = {
    stdio: 'inherit',
    shell: true,
    env: Object.assign(process.env, env)
  };

  return new Promise((resolve, reject) => {
    spawn(command, args.filter(arg => !!arg), options).on('close', code => {
      if (code === 0) resolve();
      else reject(code);
    });
  });
};