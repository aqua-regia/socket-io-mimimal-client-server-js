//server.js
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket){
   console.log('connection');

  socket.on('room1', function (from, msg) {
    console.log(from, 'room1:-', msg);
  });

});

http.listen(8080, function () {
  console.log('listening on port:- 8080');
});