# aurora.

Vue oriented front-end development framework.

## installation.

    $ npm install aurora-framework


## cli.

Aurora comes with its own CLI that can be used to interact with your project. To use the tasks, you
can either install the framework globally (`npm install -g aurora-framework`), add your own NPM
scripts to your package JSON, or call `./node_modules/bin/aurora` directly.

* `aurora build` - Perform a webpack build of the current project.
    * `aurora build --production` Perform a production build.