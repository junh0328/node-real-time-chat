// Require the express module
const express = require('express');

// create a new express application
const app = express();

// require the http module
const http = require('http').Server(app);

// require the socket.io module
const io = require('socket.io');

const port = 5000;

// create an event listener
const socket = io(http);

// to listen to messages
socket.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

//wire up the serever to listen to our port 5000
http.listen(port, () => {
  console.log(`connected to port: ${port}`);
});
