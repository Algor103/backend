const http = require('http');
const app = require('./app');

// cette fonction renvoi un  port valide
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

var express = require('express');
module.exports = app;

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


// on recherche les differents erreur et on les gere 
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port:' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges.');
            process.exist(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use.');
            process.exist(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port' + port;
    console.log('listening on ' + bind);
});

server.listen(port);