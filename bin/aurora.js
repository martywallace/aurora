#!/usr/bin/env node

const aurora = require('commander');

aurora.version('3.0.1');

require('./commands/setup')(aurora);
require('./commands/build')(aurora);
require('./commands/create')(aurora);

aurora.parse(process.argv);