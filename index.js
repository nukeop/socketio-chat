const express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

var allMessages = [];

io.on('connection', socket => {

  io.emit('newuser');
  allMessages.map((el, i) => {
    socket.emit('msg', el);
  });

  socket.on('msg', (msg) => {
    io.emit('msg', msg);
    allMessages.push(msg);
  });

});

http.listen(process.env.PORT, () => {
  console.log('listening on *:' + process.env.PORT);
});
