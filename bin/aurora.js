#!/usr/bin/env node

const aurora = require('commander');

aurora.version('1.1.0');

require('./commands/setup')(aurora);
require('./commands/build')(aurora);

aurora.parse(process.argv);