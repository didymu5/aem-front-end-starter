// Generate SASS files

const fs = require('fs');
const path = require('path');
const sass = require('node-sass');
const package_version = require('./../package.json').version;

const _PATH = {
  src: path.resolve(__dirname, '../src/scss/style.scss'),
  dest: path.resolve(__dirname, '../dist/generated.css'),
  sourceMapFile: path.resolve(__dirname, '../dist/generated.css.map')
}

sass.render({
  file: _PATH.src,
  outFile: _PATH.dest,
  sourceMap: [_PATH.dest, '.map'].join(''),
  includePaths: ['node_modules']
}, function(err, result) {
  if (err) {
    console.log('\n', this)
    throw new Error(err);
  }
  var stylesCSSbuffer = Buffer.concat([new Buffer('/* ' + package_version + ' */\n'), result.css])

  fs.writeFile(_PATH.dest, stylesCSSbuffer, function(err, data) {
    if (err) throw new Error(err);
    console.log('generating css dist: ', _PATH.dest);
  });
  fs.writeFileSync(_PATH.sourceMapFile, result.map, 'utf-8');
});
