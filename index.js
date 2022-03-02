const requireGlob = require('require-glob');


const modules = requireGlob.sync(['./if*.js']);

Object.values(modules).forEach((obj) => {
  module.exports = { ...module.exports, ...obj };
});