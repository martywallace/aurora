const pascal = require('pascal-case');
const kebab = require('kebab-case');
const { Environment } = require('nunjucks');

const env = new Environment();

env.addFilter('kebab', kebab);
env.addFilter('pascal', pascal);

module.exports = (template, context) => env.renderString(template, context);