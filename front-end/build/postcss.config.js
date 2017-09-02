/* jshint undef: true, unused: true, esversion:6, node: true */

/**
 * Configurations for post css, used for autoprefixer here.
 */

module.exports = {
  plugins: {
    'autoprefixer':{browsers:['last 2 versions' ]} // last two versions of each browser including ie 10-11
                                                   // read more here: https://github.com/ai/browserslist
  }
}