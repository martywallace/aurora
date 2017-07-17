#!/usr/bin/env node

const aurora = require('commander');

require('./commands/init')(aurora);
require('./commands/build')(aurora);

aurora.parse(process.argv);