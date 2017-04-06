const express = require('express');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var randomUtils = require('./server/RandomUtils');

app.use(express.static(__dirname + '/src/client/public'));

var allMessages = [];
var sockets = {};

io.on('connection', socket => {

  sockets[socket.id] = {
    id: socket.id,
    nickname: randomUtils.randomUsername(),
    color: "#"+((1<<24)*Math.random()|0).toString(16)
  };

  io.emit('newuser', sockets[socket.id].nickname);
  allMessages.map((el, i) => {
    socket.emit('msg', el);
  });

  socket.on('msg', (msg) => {
    var msgObj = {
      socketid: socket.id,
      author: sockets[socket.id].nickname,
      content: msg,
      color: sockets[socket.id].color
    };

    io.emit('msg', msgObj);
    allMessages.push(msgObj);
  });

  socket.on('disconnect', function(){
    io.emit('userleft', sockets[socket.id].nickname);
  });

});

http.listen(process.env.PORT, () => {
  console.log('listening on *:' + process.env.PORT);
});
