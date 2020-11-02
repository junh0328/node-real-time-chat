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

//database connection
const Chat = require('./models/ChatSchema');
const connect = require('./dbconnection');

// to listen to messages
socket.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg);
    //broadcast message to everyone in port:5000 except yourself
    socket.broadcast.emit('received', { message: msg });

    connect.then((db) => {
      console.log('connected correctly to the server');

      // to save our chat Message on mongoDB
      let chatMessage = new Chat({ message: msg, sender: 'junhee' });
      chatMessage.save();
    });
  });
});

//wire up the serever to listen to our port 5000
http.listen(port, () => {
  console.log(`connected to port: ${port}`);
});
