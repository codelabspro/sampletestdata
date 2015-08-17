window.onload = function() {

  // Get references to elements on the page.
  var form = document.getElementById('message-form');
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var closeBtn = document.getElementById('close');

  // The rest of the code in this tutorial will go here...
  // Create a new WebSocket.
  var socket = new WebSocket('ws://echo.websocket.org');

  // Show a connected message when the WebSocket is opened.
  socket.onopen = function(event) {
    socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.URL;
    socketStatus.className = 'open';
  };

};
