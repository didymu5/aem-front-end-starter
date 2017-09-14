/* jshint undef: true, unused: true, esversion:6, node: true */
const path = require('path');
// console.log(path.join(__dirname, '../../dist/generated.css'))
module.exports = {
  src: path.join(__dirname, '../../src/scss/style.scss'), // source scss file
  dest: path.join(__dirname, '../../dist/generated.css'), // destination css file
  sourceMap: true, // generate sourcemaps

  // you may need this if you are including a third party scss library
  includePaths: ['node_modules'] // https://github.com/sass/node-sass#includepaths
};
