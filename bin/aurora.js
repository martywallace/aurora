#!/usr/bin/env node

const aurora = require('commander');

require('./commands/init')(aurora);

aurora.parse(process.argv);