/* jshint undef: true, unused: true, esversion:6, node: true */

module.exports = {
  src: 'src/scss/style.scss', // source scss file
  dest: 'dist/generated.css', // destination css file
  sourceMap: true, // generate sourcemaps
  
  // you may need this if you are including a third party scss library
  includePaths: [] // https://github.com/sass/node-sass#includepaths
};