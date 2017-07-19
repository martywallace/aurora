const nunjucks = require('nunjucks');

module.exports = (template, context) => nunjucks.renderString(template, context);