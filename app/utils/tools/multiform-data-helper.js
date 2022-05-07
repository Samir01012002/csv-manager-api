'use strict';

const formidable = require('formidable');
const fs = require('fs');

module.exports.parseRequest = async function (req) {
  return new Promise ((resolve, reject) => {
    let form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      if (err){
        reject(err);
        return;
      }

      resolve({fields: fields,files:files});
    });
  });
};

module.exports.fileReader = function (path) {
  return fs.readFileSync(path);
};
