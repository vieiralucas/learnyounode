/**
 * TIME SERVER
 * Exercise 10 of 13
 * 
 * Write a TCP time server!
 * 
 * Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:
 * 
 *     "YYYY-MM-DD hh:mm"
 * 
 * followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:
 * 
 *     "2013-07-06 17:42"
 */

var net = require('net');

var server = net.createServer(function(socket) {
    var date = new Date(), month;
    socket.end(date.getFullYear() + '-' + fillZero(date.getMonth() + 1) + '-' + fillZero(date.getDate()) + ' ' + fillZero(date.getHours()) + ':' + fillZero(date.getMinutes()));
});

function fillZero(str) {
    if(str.toString().length === 1) {
        str = '0' + str;
    }
    return str;
}

server.listen(process.argv[2]);