var filterls = require('./filterls.js');

filterls(process.argv[2], process.argv[3], function(err, list) {
    if(err)
        return console.error(err);

    list.forEach(function(item) {
        console.log(item);
    });
});