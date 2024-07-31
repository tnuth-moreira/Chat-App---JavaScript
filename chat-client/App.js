const socket = io();

function sendMessage() {
  const message = document.getElementById('messageInput').value;
  socket.emit('chat message', message);
}

socket.on('chat message', (msg) => {
  const chat = document.getElementById('chat');
  chat.innerHTML += `<p>${msg}</p>`;
});
