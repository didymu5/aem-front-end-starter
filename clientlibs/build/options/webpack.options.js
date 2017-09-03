/* jshint undef: true, unused: true, esversion:6, node: true */

module.exports = {
  entry: ['./src/ts/polyfill.js', './src/ts/main.ts'], // webpoack entry typescript file
  output: './dist/generated.js', // webpack output bundle
  sourceMap: true // generate sourcemaps
}