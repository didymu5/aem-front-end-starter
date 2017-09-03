/* jshint undef: true, unused: true, esversion:6, node: true */

module.exports = {
  // path to the clientlib in AEM JCR
  AemPath: '/etc/design/clientlib/front-end',
  // https://github.com/wcm-io-frontend/aem-clientlib-generator#module-clientlibarrprops--props-options-callback 
  props: {
    name: 'front-end',
    categories: ['front-end'],
    assets: {
      js: { base: '.', files: [{ src: 'dist/generated.js', dest: 'generated.js' },] },
      css: { base: '.', files: [{ src: 'dist/generated.css', dest: 'generated.css' }] },
      resources: {
        base: '.',
        files:
        [
          { src: 'dist/generated.js.map', dest: 'generated.js.map' },
          { src: 'dist/generated.css.map', dest: 'generated.css.map' }
          // you can add more assets that you wish to include here, such fonts, images, ...etc
        ]
      }
    }
  },
  // https://github.com/wcm-io-frontend/aem-clientlib-generator#module-clientlibarrprops--props-options-callback 
  options: {
    clientLibRoot: 'src/main/resources/SLING-INF/clientlibs-root', // where the generated clientlib will be
    verbose: true // true for more logs 
  }
};