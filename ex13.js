/** 
 * HTTP JSON API SERVER
 * Exercise 13 of 13
 * 
 * Write an HTTP server that serves JSON data when it receives a GET 
 * request to the path '/api/parsetime'. Expect the request to contain
 * a query string with a key 'iso' and an ISO-format time as the value.
 * 
 * For example:
 * 
 *   /api/parsetime?iso=2013-08-10T12:10:15.474Z
 * 
 * The JSON response should contain only 'hour', 'minute' and 'second'
 *  properties. For example:
 * 
 *     {
 *       "hour": 14,
 *       "minute": 23,
 *       "second": 15
 *     }
 * 
 * Add second endpoint for the path '/api/unixtime' which accepts the same 
 * query string but returns UNIX epoch time under the property 'unixtime'. For example:
 * 
 *     { "unixtime": 1376136615474 }
 * 
 * Your server should listen on the port provided by the first argument to your program.
 */

var http = require('http'),
    url = require('url');

var server = http.createServer(function(req, res) {
    if(req.method != 'GET') {
        res.writeHead(405);
        res.end();
    }
    var data = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(data.pathname === '/api/parsetime') {
        var date = new Date(data.query.iso),
            response = {
                "hour" : date.getHours(),
                "minute" : date.getMinutes(),
                "second" : date.getSeconds()
            };
        res.write(JSON.stringify(response));
    } else if (data.pathname === '/api/unixtime') {
        res.write(JSON.stringify({"unixtime": new Date(data.query.iso).getTime()}));
    } else {
        res.writeHead(404);
        res.end();
    }
    res.end();
});

server.listen(Number(process.argv[2]));