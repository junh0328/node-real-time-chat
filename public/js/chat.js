var socket = io();
/*
This is a self-executing function it initializes socket.io on the client side and emits the message typed into the input box.

*/

/*
chat.js에서 emit 을 통해 ' event ' 안에 담긴 이벤트(ex) chat message)를 발생시키고, val를 비우면

App.js에서 socket.on(' chat message ')를 통해 받아서 msg를 받았다고 콘솔창에 출력하고, received라는 이벤트를 발생시킨다.
*/

(function () {
  $("form").submit(function (e) {
    //prevents page reloading
    e.preventDefault();
    socket.emit("chat message", $("#m").val());
    $("#m").val("");
    return false;
  });

  socket.on("received", (data) => {
    let li = document.createElement("li");
    let span = document.createElement("span");

    let messages = document.getElementById("messages");
    messages.appendChild(li).appendChild(data.message);
    messages.appendChild(span).append("by " + "annonymous" + ": " + "just now");
    console.log("Hello bingo!");
  });
});

// fetching initial chat messages from the database
(function () {
  fetch("/chats")
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      json.map((data) => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        messages.appendChild(li).append(data.message);
        messages
          .appendChild(span)
          .append("by " + data.sender + ": " + formatTimeAgo(data.createdAt));
      });
    });
});
