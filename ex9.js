/**
 * JUGGLING ASYNC
 * Exercise 9 of 13
 * 
 * This problem is the same as the previous problem (HTTP COLLECT) 
 * in that you need to use http.get(). However, this time you will 
 * be provided with three URLs as the first three command-line arguments.
 * 
 * You must collect the complete content provided to you by each of the URLs 
 * and print it to the console (stdout). You don't need to print out the length, 
 * just the data as a String; one line per URL. The catch is that you must print 
 * them out in the same order as the URLs are provided to you as command-line arguments.
 */

var http = require('http');

var completeStrs = [null, null, null];

for (var i = 0; i < 3; i++) {
    request(i, function(completeStr, index) {
        completeStrs[index] = completeStr;
        if(completeStrs[0] && completeStrs[1] && completeStrs[2]) {
            finish();
        }
    });
}

function finish() {
    completeStrs.forEach(function(str) {
        console.log(str);
    });
}

function request(index, callback) {
    http.get(process.argv[2 + index], function(response) {
        var completeStr = '';

        response.setEncoding('utf8');
        response.on('error', console.error);
        response.on('data', function(data) {
            completeStr += data;
        });
        response.on('end', function() {
            callback(completeStr, index);
        });
    });
}