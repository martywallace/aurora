#!/usr/bin/env node

const aurora = require('commander');

aurora.version('0.1.0');

require('./commands/build')(aurora);

aurora.parse(process.argv);