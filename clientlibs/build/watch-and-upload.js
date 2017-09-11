/* jshint undef: true, unused: true, esversion:6, node: true */

/**
 * A Script to watch dist directory and post the contents: JS/CSS to
 * AEM clientlib directory via a PUT request.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const clientlibOptions = require('./options/clientlib.options.js');
const ora = require('ora');

const spinner = ora('Loading unicorns');
/**
 * Uploads a file from local dis directly to AEM
 * @param {*} filePath path to file to upload
 * @param {*} uploadPath aem path to upload to
 */
function uploadToAem(filePath, uploadPath) {
  spinner.start();
  fs.readFile(filePath, (err, data) =>
  {

    if (err) console.error("error "+ err);

    const options = {
      hostname: 'localhost',
      port: 4502, // change this if running on a different port
      path: uploadPath + path.basename(filePath),
      method: 'PUT',
      headers: {
        'Content-Length': Buffer.byteLength(data.toString()),
        'Authorization': 'Basic ' + new Buffer('admin:admin').toString('base64') // change auth user:pass if not using default
      }
    };
    console.log(`uploading ${filePath} to aem path ${uploadPath}`);
    // send a put request
    const req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('end', () => res.statusCode > 299 ?
                          console.log(`file ${filePath} uploaded successfully`) :
                          console.warn(`some issue happened while uploading ${filePath} `));
    });

    req.on('error', (e) => console.error(`request error while uploading ${filePath}: ${e.message}`));

    if (err) console.error(err);

    req.write(data.toString());
    req.end();
  });
}


const watchDir = 'dist/'; // directory to watch

// watch and upload to AEM
fs.watch(watchDir, (eventType, filename) => {
  uploadToAem(watchDir+filename, clientlibOptions.AemPath);
  spinner.stop();
});

