var fs = require('fs'),
    path = require('path');

module.exports = function(dir, extension, callback) {
    fs.readdir(dir, function(err, files) {
        if(err) {
            return callback(err);
        }
        var list = [];
        files.forEach(function(file) {
            if(path.extname(file) === '.' + extension) {
                list.push(file);
            }
        });
        callback(null, list);
    });
};