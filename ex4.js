/**
 * MY FIRST ASYNC I/O!
 * Exercise 4 of 13
 * 
 * Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
 * 
 * The full path to the file to read will be provided as the first command-line argument.
 */

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, file) {
    if(err) { 
        return console.log(err);;
    }
    console.log(file.split('\n').length - 1);
});