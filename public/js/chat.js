var socket = io();
(function () {
  $('form').submit(function (e) {
    //prevents page reloading
    e.preventDefault();
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return true;
  });
});

/*
This is a self-executing function it initializes socket.io on the client side and emits the message typed into the input box.

*/

/*
chat.js에서 emit 을 통해 ' event ' 안에 담긴 이벤트(ex) chat message)를 발생시키고, val를 비우면

App.js에서 socket.on(' chat message ')를 통해 받아서 msg를 받았다고 콘솔창에 출력하고, received라는 이벤트를 발생시킨다.
*/
