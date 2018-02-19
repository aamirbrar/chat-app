const path = require('path');
const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

var {generateMessage} = require('./utils/message');
const PublicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = SocketIO(server);
app.use(express.static(PublicPath));

io.on('connection', socket => {
  socket.emit(
    'newMessage',
    generateMessage('admin', 'Welcome To Chat Application')
  );
  socket.broadcast.emit(
    'newMessage',
    generateMessage('admin', 'New User Joined')
  );
  socket.on('createMessage', message => {
    io.emit('newMessage', generateMessage(message.from, message.text));
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    // });
  });

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('server is up at ', port);
});
