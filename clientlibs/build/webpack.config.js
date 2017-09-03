/* jshint undef: true, unused: true, esversion:6, node: true */

const webpackOptions = require('./options/webpack.options.js');
const sassOptions = require('./options/sass.options.js');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const sassLoaderOptions = sassOptions.includePaths ? { includePaths: sassOptions.includePaths } : {};
const extractSass = new ExtractTextPlugin({ filename: sassOptions.dest });
const plugins = [ extractSass ];

const watch = process.argv.filter(arg => arg === '--watch').length;
// if watch option is enabled, add shell plugin and livereload
if(watch) {
  plugins.push(new WebpackShellPlugin({onBuildEnd:['node build/watch-and-upload.js']}));
  plugins.push(new LiveReloadPlugin({appendScriptTag: true}));
}
// if watch option is not enabled, add occurrence order and uglify plugin
else {
   plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
   plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: webpackOptions.sourceMap}));
}

module.exports = {
  devtool: webpackOptions.sourceMap ? 'source-map' : '',
  entry: webpackOptions.entry,
  output: { filename:  webpackOptions.output},
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        test: /\.scss$/,
        use: extractSass.extract
        ({
          use:
          [
            { loader: 'css-loader', options:{ url:false, optimize:true, minimize:true}},
            { loader: 'postcss-loader', options: {config:{path: 'build/postcss.config.js'} } },
            { loader: 'sass-loader', options: sassLoaderOptions}
          ]
        })
      }
    ]
  },
  plugins: plugins,
};