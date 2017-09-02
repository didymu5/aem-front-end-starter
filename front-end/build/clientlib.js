/* jshint undef: true, unused: true, esversion:6, node: true */

const clientlibOptions = require('./options/clientlib.options.js');
const clientlib = require("aem-clientlib-generator");

clientlib(clientlibOptions.props, clientlibOptions.options, function(){
    console.log("Clientlib is generated!");
});