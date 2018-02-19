const path = require('path');
const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const PublicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = SocketIO(server);
app.use(express.static(PublicPath));

io.on('connection', socket => {
  console.log('New Connection');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('server is up at ', port);
});
