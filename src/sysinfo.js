"use strict";
exports.__esModule = true;
//import * as si from 'systeminformation';
var si = require('systeminformation');
var result = [];
Promise.all([
    si.cpu(function (data) {
        result.push(data);
    }),
    si.system(function (data) {
        result.push(data);
    }),
    si.mem(function (data) {
        result.push(data);
    }),
    si.osInfo(function (data) {
        result.push(data);
    }),
    si.currentLoad(function (data) {
        result.push(data);
    }),
    si.processes(function (data) {
        result.push(data);
    }),
    si.diskLayout(function (data) {
        result.push(data);
    }),
    si.networkInterfaces(function (data) {
        result.push(data);
    })
])
    .then(function (result) {
    console.log(result);
});
var hostname = 'localhost';
var port = 8000;
var http = require('http');
var requestListener = function (req, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(result));
    response.end("{\"message\": \"This is a JSON response\"}");
};
var server = http.createServer(requestListener);
server.listen(port, hostname, function () {
    //console.log(`Server running at http://${hostname}:${port}/api/v1/sysinfo`);
});
exports["default"] = si;
