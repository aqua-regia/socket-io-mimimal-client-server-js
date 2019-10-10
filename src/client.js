//client.js
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8080', {reconnect: true});

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected to server!!!!');
});

console.log("sending message to server...")
socket.emit('room1', 'hassan', 'socket.io rocks');