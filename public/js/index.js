var socket = io();

socket.on('connect', function() {
  console.log('connect to server');
  socket.emit('createMessage', {
    to: 'AamirApporio',
    text: 'Hello Aamir Here',
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected From Server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
